import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Stackedit from 'stackedit-js';
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';
import firebase from '../firebase/firebase';
import Header from '../components/Header';
import MarkdownRender from '../components/MarkdownRender';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort} from '@fortawesome/free-solid-svg-icons';

export default class AdminPage extends Component {
    state = {
        stackedit: new Stackedit(),
        text: '',
        redirect: '',
        currentFunctionId: '',
        functions: this.props.functions
    }

    componentDidMount() {
        this.state.stackedit.on('fileChange', file => {
            this.setState({text: file.content.text});
        });

        this.state.stackedit.on('close', async () => {
            if (this.state.currentFunctionId === '') return;

            await firebase
                .firestore()
                .collection('content')
                .doc(this.state.currentFunctionId)
                .update({content: this.state.text});

            this.setState({redirect: `function/${this.state.currentFunctionId}`, text: ''});
        });
    }

    fetchData = async id => {
        const doc = await firebase.firestore().collection('content').doc(id).get();

        if (!doc.exists)
            return '';

        return doc.data().content;
    }

    editContentOfFunction = async id => {
        const content = await this.fetchData(id);
        this.setState({text: content, currentFunctionId: id}, () => {
            this.state.stackedit.openFile({content: {text: this.state.text}});
        });
    }

    deleteFunction = async id => {
        if (!window.confirm(`Soll die Funktion mit der ID '${id}' wiklich gelöscht werden?`))
            return;

        await firebase.firestore().collection('content').doc(id).delete();

        this.props.loadFunctions();
    }

    onSortEnd = async ({oldIndex, newIndex}) => {
        const f = this.state.functions;
        const a = f[oldIndex];
        const b = f[newIndex];
        f[oldIndex] = b;
        f[newIndex] = a;

        this.setState({functions: f});

        await firebase.firestore().collection('content').doc(a.id).update({index: newIndex + 1})
        await firebase.firestore().collection('content').doc(b.id).update({index: oldIndex + 1})

        this.props.loadFunctions();
    }

    render() {
        if (this.state.redirect !== '')
            return <Redirect to={this.state.redirect} push={true}/>;

        const DragHandle = SortableHandle(() => <FontAwesomeIcon icon={faSort}/>);

        const SortableItem = SortableElement(({value}) =>
            <div className={'admin-function-list-item'}>
                <div className={'admin-function-list-item__index'}>#{value.index}</div>
                <img className={'admin-function-list-item__icon'} src={value.icon} alt={''}/>
                <div className={'admin-function-list-item__name'}>{value.name}</div>
                <div className={'admin-function-list-item__formula'}><MarkdownRender source={`$${value.formula}$`}/></div>
                <div className={'admin-function-list-item__handle'}><DragHandle/></div>
                <div className={'admin-function-list-item__button'} onClick={() => this.editContentOfFunction(value.id)}>Inhalt</div>
                <Link className={'admin-function-list-item__button'} to={`/admin/edit/${value.id}`}>Bearbeiten</Link>
                <div className={'admin-function-list-item__button'} onClick={() => this.deleteFunction(value.id)}>Löschen</div>
            </div>
        );

        const SortableList = SortableContainer(({items}) =>
            <div className={'admin-function-list'}>
                {items.map((value, index) =>
                    <SortableItem key={value.id} index={index} value={value}/>
                )}
            </div>
        );

        return (
            <div className={'page'}>
                <Header/>

                <div className={'admin-page'}>
                    <div className={'action-bar'}>
                        <Link to={'/admin/add'} className={'action-bar__button'}>Neue Funktion erstellen</Link>
                    </div>

                    <SortableList items={this.state.functions} onSortEnd={this.onSortEnd} lockAxis={'y'} useDragHandle/>
                </div>
            </div>
        );
    }
}
