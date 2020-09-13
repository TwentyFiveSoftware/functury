import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Stackedit from 'stackedit-js';
import firebase from '../firebase/firebase';
import Header from '../components/Header';
import MarkdownRender from '../components/MarkdownRender';

export default class AdminPage extends Component {
    state = {
        stackedit: new Stackedit(),
        text: '',
        redirect: '',
        currentFunctionId: '',
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
            return;

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
        window.location.reload();
    }

    render() {
        if (this.state.redirect !== '')
            return <Redirect to={this.state.redirect}/>;

        return (
            <div className={'page'}>
                <Header/>

                <div className={'admin-page'}>
                    <div className={'action-bar'}>
                        <Link to={'/admin/add'} className={'action-bar__button'}>Neue Funktion erstellen</Link>
                    </div>

                    <div className={'admin-function-list'}>
                        {this.props.functions.map((f, index) =>
                            <div className={'admin-function-list-item'} key={index}>
                                <div className={'admin-function-list-item__index'}>#{index + 1}</div>
                                <img className={'admin-function-list-item__icon'} src={f.icon} alt={''}/>
                                <div className={'admin-function-list-item__name'}>{f.name}</div>
                                <div className={'admin-function-list-item__formula'}><MarkdownRender source={`$${f.formula}$`}/></div>
                                <div className={'admin-function-list-item__button'} onClick={() => this.editContentOfFunction(f.id)}>Inhalt</div>
                                <div className={'admin-function-list-item__button'}>Bearbeiten</div>
                                <div className={'admin-function-list-item__button'} onClick={() => this.deleteFunction(f.id)}>Löschen</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
