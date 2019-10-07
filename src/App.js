import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style/index.css';

import TopBar from './components/TopBar';
import IMG_linearFunction from './assets/linear_function.png';

export default class App extends Component {
    state = {
        functions: [
            {
                id: 1,
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
                    <Route path='/function/:id' >
                        <div className="page">
                            <TopBar title="" border={false}></TopBar>
                        </div>
                    </Route>

                    <Route path='/' >
                        <div className="page">
                            <TopBar title='Funktionen | Übersicht' border={true}></TopBar>
                            <div className="function-list-container">
                                {(this.state.functions.map((f, index) => (
                                    <Link className="function-list-container__function" key={index} to={`/function/${f.id}`}>
                                        <div className="function-list-container__name">{f.name}</div>
                                        <div className="function-list-container__image" style={{ backgroundImage: `url(${f.image})` }} alt=" " />
                                    </Link>
                                )))}
                            </div>
                        </div>
                    </Route>
                </Switch>

            </Router>
        );
    }
}
