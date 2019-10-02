import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/index.css';

import TopBar from './components/TopBar';
import IMG_linearFunction from './assets/linear_function.png';

export default class App extends Component {
    state = {
        functions: [
            {
                name: 'Lineare Funktionen',
                image: IMG_linearFunction,
                grade: 8
            }
        ]
    }

    render() {
        return (
            <Router>

                <Switch>
                    <Route path='/' >
                        <div className="page">
                            <TopBar></TopBar>
                            <div className="function-list-container">
                                {(this.state.functions.map((f, index) => (
                                    <div className="function-list-container__function" key={index}>
                                        <div className="function-list-container__name">{f.name}</div>
                                        <div className="function-list-container__image" style={{ backgroundImage: `url(${f.image})` }} alt=" " />
                                    </div>
                                )))}
                            </div>
                        </div>
                    </Route>

                </Switch>

            </Router>
        );
    }
}
