import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Stackedit from 'stackedit-js';
import firebase from '../firebase/firebase';
import Header from '../components/Header';

export default class AdminPage extends Component {
    state = {
        stackedit: new Stackedit(),
        text: '',
        redirect: '',
    }

    componentDidMount() {
        const fetchData = async () => {
            const doc = await firebase.firestore().collection('content').doc('linear-function').get();
            this.setState({text: doc.data().content}, () => {
                this.state.stackedit.openFile({content: {text: this.state.text}});
            });
        }

        this.state.stackedit.on('fileChange', file => {
            this.setState({text: file.content.text});
            console.log(file)
        });

        this.state.stackedit.on('close', async () => {
            await firebase
                .firestore()
                .collection('content')
                .doc('linear-function')
                .update({content: this.state.text});

            this.setState({redirect: 'function/linear-function'});
        });

        fetchData();
    }

    render() {
        if (this.state.redirect !== '')
            return <Redirect to={this.state.redirect}/>;

        return (
            <div className={'page'}>
                <Header/>
            </div>
        );
    }
}
