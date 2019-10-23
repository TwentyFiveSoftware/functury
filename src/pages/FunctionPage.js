import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import TopBar from '../components/TopBar';
import FunctionPlotter from '../components/FunctionPlotter';

export default class FunctionPage extends Component {
    render() {
        let f = this.props.functions.find(f => f.id === this.props.match.params.id);

        if (f !== undefined)
            return (
                <div className="page page--function-page">
                    <Switch>
                        <Route path={`${this.props.match.url}/1`} component={props => <Tab1 {...props} func={f} />} />
                        <Route path={`${this.props.match.url}/2`} component={props => <Tab2 {...props} func={f} />} />
                        <Route path={`${this.props.match.url}/3`} component={props => <Tab3 {...props} func={f} />} />
                        <Route path={`${this.props.match.url}/4`} component={props => <Tab4 {...props} func={f} />} />

                        <Redirect to={`${this.props.match.url}/1`} />
                    </Switch>
                </div>
            );

        else return <Redirect to='/' />
    }
}

class Tab1 extends Component {
    state = {
        m: 1,
        t: 0
    }

    render() {
        let min = -10;
        let max = 10;
        let step = 0.25;

        let middleValue = min + (max - min) / 2;

        return (
            <div>
                <TopBar page="function" func={this.props.func} tab={'1'} />

                <div className="graph-page">
                    <div className="panel left">
                        <FunctionPlotter equation={x => this.state.m * x + this.state.t} />
                    </div>

                    <div className="right">
                        <div className="panel">
                            <div className="text text--center text--semi-big">y = {this.state.m}x {this.state.t < 0 ? '-' : '+'} {Math.abs(this.state.t)}</div>
                        </div>

                        <div className="panel panel--large-padding">
                            <div>
                                <div className="text text--headline">Steigung</div>
                                <div className="text text--small text--light">y = <b className="text--highlighted">m</b>x + t</div>
                            </div>

                            <div className="slider">
                                <input type="range" min={min} max={max} value={this.state.m} step={step} className="slider__input" onChange={e => this.setState({ m: Number(e.target.value) })} />
                                <div className="slider__labels">
                                    <div>{min}</div>
                                    <div>{middleValue}</div>
                                    <div>{max}</div>
                                </div>
                            </div>

                            <div className="empty-space" />

                            <div>
                                <div className="text text--headline">y-Achsenabschnitt</div>
                                <div className="text text--small text--light">y = mx + <b className="text--highlighted">t</b></div>
                            </div>

                            <div className="slider">
                                <input type="range" min={min} max={max} value={this.state.t} step={step} className="slider__input" onChange={e => this.setState({ t: Number(e.target.value) })} />
                                <div className="slider__labels">
                                    <div>{min}</div>
                                    <div>{middleValue}</div>
                                    <div>{max}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

class Tab2 extends Component {
    render() {
        return (
            <div>
                <TopBar page="function" func={this.props.func} tab={'2'} />

                {/* Besonderheiten */}
            </div>
        );
    }
}

class Tab3 extends Component {
    render() {
        return (
            <div>
                <TopBar page="function" func={this.props.func} tab={'3'} />

                {/* Berechnung */}
            </div>
        );
    }
}

class Tab4 extends Component {
    render() {
        return (
            <div>
                <TopBar page="function" func={this.props.func} tab={'4'} />

                {/* Aufgaben */}
            </div>
        );
    }
}