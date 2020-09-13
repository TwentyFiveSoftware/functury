import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import firebase from '../firebase/firebase';
import FunctionForm from '../components/FunctionForm';

export default class AdminEditPage extends Component {
    state = {
        redirect: '',

        id: '',
        name: '',
        formula: '',
        desmosFormula: '',
        desmosSlider: '',
        icon: ''
    }

    save = async () => {
        const data = {
            name: this.state.name,
            formula: this.state.formula,
            icon: this.state.icon,
            desmos: {
                formula: this.state.desmosFormula,
                slider: this.state.desmosSlider.split(';')
            }
        }

        await firebase.firestore().collection('content').doc(this.state.id).update(data);

        this.setState({redirect: '/'});
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        const load = async () => {
            const doc = await firebase.firestore().collection('content').doc(id).get();

            if (!doc.exists) {
                this.setState({redirect: '/'});
                return;
            }

            const {name, desmos, formula, icon} = doc.data();
            this.setState({
                id, name, formula, icon, desmosFormula: desmos.formula, desmosSlider: desmos.slider.join(';')
            });
        }

        load();
    }

    render() {
        if (this.state.redirect !== '')
            return <Redirect to={this.state.redirect}/>;

        return (
            <div className={'page'}>
                <Header/>

                <div className={'admin-page'}>
                    <div className={'action-bar'}>
                        <Link to={'/admin'} className={'action-bar__button'}>Abbrechen</Link>
                        <div className={'action-bar__button'} onClick={() => this.save()}>Speichern</div>
                    </div>

                    {this.state.id !== '' &&
                    <FunctionForm title={'Funktion bearbeiten'} lockId={true} onChange={delta => this.setState(delta)} initialValues={this.state}/>
                    }
                </div>
            </div>
        );
    }
}
