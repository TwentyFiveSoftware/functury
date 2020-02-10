import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './style/index.css';

import {ReactComponent as LinearFunctionSVG} from './assets/linear-function.svg';
import FrontPage from './pages/FrontPage';
import FunctionPage from './pages/FunctionPage';
import LinearFunction from './functions/LinearFunction';

export default class App extends Component {
    /**
     *  id: https://functury.web.app/function/:id/
     *  name: FrontPage & FunctionPage-Title
     *  func: FrontPage
     *  svg: FrontPage
     *  grade: Dropdown (FrontPage)
     *  tabs: Name of import of FunctionPage-Tabs
     */
    state = {
        functions: [
            {
                id: 'linear-function',
                name: 'Lineare Funktionen',
                func: 'y = mx + t',
                svg: <LinearFunctionSVG/>,
                grade: 8,
                tabs: LinearFunction
            }
        ]
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={props => <FrontPage functions={this.state.functions} {...props} />}/>
                    <Route path='/function/:id' component={props => <FunctionPage functions={this.state.functions} {...props} />}/>
                    <Redirect to='/'/>
                </Switch>
            </Router>
        );
    }
}
