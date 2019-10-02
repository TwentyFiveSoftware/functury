import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/index.css';

import TopBar from './components/TopBar';

export default class App extends Component {
    render() {
        return (
            <Router>

                <Switch>
                    <Route path='/' >
                        <div className="page">
                            <TopBar></TopBar>
                        </div>
                    </Route>

                </Switch>

            </Router>
        );
    }
}
