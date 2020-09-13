import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import InputField from '../components/InputField';
import firebase from '../firebase/firebase';

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

        const data = {
            name: this.state.name,
            formula: this.state.formula,
            icon: this.state.icon,
            content: '',
            desmos: {
                formula: this.state.desmosFormula,
                slider: this.state.desmosSlider.split(';')
            }
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


                    <div className={'new-function-form'}>
                        <div className={'new-function-form__title'}>Neue Funktion erstellen</div>

                        <InputField name={'ID'}
                                    description={'Die einzigartige ID der Funktion. Sie bestimmt den Pfad, unter der die Funktion erreichbar ist, ' +
                                    'also https://functury.web.app/functions/<ID>.'}
                                    placeholder={'z.B.: "linear-function", "quadratic-function"'}
                                    onChange={v => this.setState({id: v})}
                        />

                        <InputField name={'Name'}
                                    description={'Der Name der Funktion / der Funktionsart.'}
                                    placeholder={'z.B.: "Lineare Funktionen", "Quadratische Funktionen"'}
                                    onChange={v => this.setState({name: v})}
                        />

                        <InputField name={'Formel'}
                                    description={'Die allgemeine Formel der Funktion in LATEX-Schreibweise.'}
                                    placeholder={'z.B.: "y=mx+t", "y=a(x-b)^2+c", "y=\\frac{a}{x+b}+c"'}
                                    latex={true}
                                    onChange={v => this.setState({formula: v})}
                        />

                        <InputField name={'Desmos - Formel'}
                                    description={'Die Formel für die Funktion, die in Desmos dargestellt wird (LATEX-Schreibweise).'}
                                    placeholder={'z.B.: "y=mx+t", "y=a(x-b)^2+c", "y=\\frac{a}{x+b}+c"'}
                                    onChange={v => this.setState({desmosFormula: v})}
                        />

                        <InputField name={'Desmos - Schieberegler'}
                                    description={'Die Schieberegler, die in Desmos dargestellt werden. Die einzelnen Scheiebregler durch Strichpunkte ";" trennen.'}
                                    placeholder={'z.B.: "m=-2.5", "a=-2.5;b=1;c=-2"'}
                                    onChange={v => this.setState({desmosSlider: v})}
                        />

                        <InputField name={'Icon'}
                                    description={'Eine URL zum Icon der Funktion, das auf der Übersichtsseite angezeigt wird.'}
                                    placeholder={'https://...'}
                                    onChange={v => this.setState({icon: v})}
                        />

                    </div>
                </div>
            </div>
        );
    }
}
