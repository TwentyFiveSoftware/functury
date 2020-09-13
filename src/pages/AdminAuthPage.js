import React from 'react';
import Header from '../components/Header';
import firebase from '../firebase/firebase';
import {Redirect} from "react-router-dom";

class AdminAuthPage extends React.Component {
    state = {
        password: '',
        redirect: false
    }

    login = async () => {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        const user = await firebase.auth().signInWithEmailAndPassword(process.env.REACT_APP_ADMIN_AUTH_EMAIL, this.state.password)
            .catch(() => {
                this.setState({password: ''});
                alert('Das angegebene Passwort ist falsch!');
            });

        if (user !== undefined && user !== null)
            this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={'/admin'}/>;

        return (
            <div className={'page'}>
                <Header/>

                <div className={'auth'}>
                    <div className={'auth__title'}>Admin-Bereich Authentifizierung</div>
                    <input className={'auth__input'} placeholder={'Passwort'} type={'password'} autoFocus
                           value={this.state.password} onChange={v => this.setState({password: v.target.value})} onKeyDown={e => e.key === 'Enter' ? this.login() : null}/>
                    <div className={'auth__button'} onClick={() => this.login()}>Bestätigen</div>
                </div>
            </div>
        );
    }
}

export default AdminAuthPage;
