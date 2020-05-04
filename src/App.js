import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './style/index.css';

import FrontPage from './pages/FrontPage';
import FunctionPage from './pages/FunctionPage';

import Fraction from './components/Fraction';

import LinearFunction from './functions/LinearFunction';
import RationalFunction from './functions/RationalFunction';
import QuadraticFunction from './functions/QuadraticFunction';

import {ReactComponent as LinearFunctionSVG} from './assets/linearFunction/linear-function.svg';
import {ReactComponent as RationalFunctionSVG} from './assets/rationalFunction/rational-function.svg';
import {ReactComponent as QuadraticFuntionSVG} from './assets/quadraticFunction/quadratic-function.svg';

export default class App extends Component {
    /**
     *  id: https://functury.web.app/function/:id/
     *  name: FrontPage & FunctionPage-Title
     *  formula: FrontPage
     *  svg: FrontPage
     *  grade: Dropdown (FrontPage)
     *  tabs: Name of import of FunctionPage-Tabs
     */
    state = {
        functions: [
            {
                id: 'linear-function',
                name: 'Lineare Funktionen',
                formula: 'y = mx + t',
                svg: <LinearFunctionSVG/>,
                grade: 8,
                tabs: LinearFunction
            },
            {
                id: 'rational-function',
                name: 'Gebrochenrationale Funktionen',
                formula: <div>y = <Fraction top={'a'} bottom={'x + b'}/> + c</div>,
                svg: <RationalFunctionSVG/>,
                grade: 8,
                tabs: RationalFunction
            },
            {
                id: 'quadratic-function',
                name: 'Quadratische Funktionen',
                formula: <div>y = a(x - b)<sup>2</sup> + c</div>,
                svg: <QuadraticFuntionSVG/>,
                grade: 9,
                tabs: QuadraticFunction
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
