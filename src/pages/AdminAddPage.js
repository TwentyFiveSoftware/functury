import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import firebase from '../firebase/firebase';
import FunctionForm from "../components/FunctionForm";

export default class AdminAddPage extends Component {
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
        const doc = await firebase.firestore().collection('content').doc(this.state.id).get();
        if (doc.exists) {
            alert(`Es existiert bereits eine Funktion mit der ID '${this.state.id}' - bitte eine andere wählen!`);
            return;
        }

        const index = (await firebase.firestore().collection('content').get()).docs.length;

        const data = {
            name: this.state.name,
            formula: this.state.formula,
            icon: this.state.icon,
            content: '',
            desmos: {
                formula: this.state.desmosFormula,
                slider: this.state.desmosSlider.split(';')
            },
            index
        }

        await firebase.firestore().collection('content').doc(this.state.id).set(data);

        this.setState({redirect: '/'});
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

                    <FunctionForm title={'Neue Funktion erstellen'} onChange={delta => this.setState(delta)}/>
                </div>
            </div>
        );
    }
}
