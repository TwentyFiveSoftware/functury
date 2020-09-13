import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './style/index.css';

import firebase from './firebase/firebase';
import ProtectedRoute from './components/ProtectedRoute';

import MainPage from './pages/MainPage';
import FunctionPage from './pages/FunctionPage';
import AdminPage from './pages/AdminPage';
import AdminAddPage from './pages/AdminAddPage';
import AdminEditPage from './pages/AdminEditPage';
import AdminAuthPage from './pages/AdminAuthPage';

export default class App extends Component {
    state = {
        functions: []
    }

    loadFunctions = async () => {
        const docs = await firebase.firestore().collection('content').get();

        const functions = [];

        docs.forEach(doc => {
            const {name, icon, formula, content, desmos, index} = doc.data();
            functions.push({id: doc.id, name, icon, formula, desmos, content, index});
        });

        functions.sort((a, b) => a.index > b.index ? 1 : -1);

        this.setState({functions});
    }

    componentDidMount() {
        this.loadFunctions();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={props => <MainPage functions={this.state.functions} {...props} />}/>
                    <Route path='/function/:id' component={props => <FunctionPage {...props} />}/>

                    <ProtectedRoute path='/admin' exact component={props => <AdminPage functions={this.state.functions} loadFunctions={() => this.loadFunctions()} {...props}/>}/>
                    <ProtectedRoute path='/admin/add' component={props => <AdminAddPage functions={this.state.functions} {...props} />}/>
                    <ProtectedRoute path='/admin/edit/:id' component={props => <AdminEditPage {...props} />}/>

                    <Route path='/auth' component={props => <AdminAuthPage {...props} />}/>

                    <Redirect to='/'/>
                </Switch>
            </Router>
        );
    }
}
