import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './style/index.css';

import firebase from './firebase/firebase';

import MainPage from './pages/MainPage';
import FunctionPage from './pages/FunctionPage';
import AdminPage from './pages/AdminPage';
import AdminAddPage from './pages/AdminAddPage';
import AdminEditPage from './pages/AdminEditPage';

export default class App extends Component {
    state = {
        functions: []
    }

    componentDidMount() {
        const load = async () => {
            const docs = await firebase.firestore().collection('content').get();

            const functions = [];

            docs.forEach(doc => {
                const {name, icon, formula, content, desmos} = doc.data();
                functions.push({id: doc.id, name, icon, formula, desmos, content});
            });

            this.setState({functions});
        }

        load();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={props => <MainPage functions={this.state.functions} {...props} />}/>
                    <Route path='/function/:id' component={props => <FunctionPage {...props} />}/>

                    <Route path='/admin' exact component={props => <AdminPage functions={this.state.functions} {...props} />}/>
                    <Route path='/admin/add' component={props => <AdminAddPage functions={this.state.functions} {...props} />}/>
                    <Route path='/admin/edit/:id' component={props => <AdminEditPage {...props} />}/>

                    <Redirect to='/'/>
                </Switch>
            </Router>
        );
    }
}
