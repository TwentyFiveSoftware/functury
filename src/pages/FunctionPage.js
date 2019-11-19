import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import TopBar from '../components/TopBar';
import FunctionPlotter from '../components/FunctionPlotter';
import Equation from '../components/Equation';
import Fraction from '../components/Fraction';
import NumberedList from '../components/NumberedList';

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

                <div className="info-page">
                    <div className="panel">
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

                <div className="info-page">
                    <div className="panel panel--large-padding-vertical">
                        <div className="text text--headline">Steigung berechnen</div>
                        <div className="empty-space empty-space--small"></div>
                        <div className="text text--multiline">Berechnung der dazugehörigen Geradengleichung aus zwei gegebenen Punkten:</div>

                        <NumberedList>
                            <React.Fragment>
                                <div className="text text--multiline">Berechne die <b>Steigung</b> m mithilfe der beiden Punkte:</div>
                                <Equation centerDark={true} equation={[['m', <Fraction
                                    top={<React.Fragment>y<sub>2</sub> - y<sub>1</sub></React.Fragment>}
                                    bottom={<React.Fragment>x<sub>2</sub> - x<sub>1</sub></React.Fragment>} />, '']]} />
                            </React.Fragment>

                            <div className="text text--multiline">
                                Setze <b>m</b> und den x- und y-Wert von einer der beiden Punkte in die Gleichung <b>y = mx + t</b> ein und löse diese nach t auf.</div>

                            <React.Fragment>
                                <div className="text text--multiline">Setze die Funktionsgleichung aus dem berechneten m und t zu zusammen.</div>
                                <Equation centerDark={true} equation={[['f(x)', 'mx + t', '']]} />
                            </React.Fragment>
                        </NumberedList>
                    </div>

                    <div>
                        <div className="panel panel--large-padding-vertical">
                            <div className="text text--headline">Beispiel - Steigung berechnen</div>
                            <div className="empty-space empty-space--small"></div>
                            <div className="text text--inline text--margin-right">P(2 / 3,5)</div>
                            <div className="text text--inline">Q(-1 / 2,75)</div>

                            <NumberedList>
                                <Equation largeSpacing={true} equation={[
                                    ['m', <Fraction
                                        top={<React.Fragment>y<sub>2</sub> - y<sub>1</sub></React.Fragment>}
                                        bottom={<React.Fragment>x<sub>2</sub> - x<sub>1</sub></React.Fragment>} />, ''],

                                    ['', <Fraction
                                        top={<React.Fragment>2,75 - 3,5</React.Fragment>}
                                        bottom={<React.Fragment>-1 - 2</React.Fragment>} />, ''],

                                    ['', <Fraction
                                        top={<React.Fragment>-0,75</React.Fragment>}
                                        bottom={<React.Fragment>-3</React.Fragment>} />, ''],

                                    ['', '0,25', '']
                                ]} />

                                <Equation equation={[
                                    ['y', 'mx + t', ''],
                                    ['3,5', '0,25 ∙ 2 + t', ''],
                                    ['3,5', '0,5 + t', '| -0,5'],
                                    ['3', 't', '']
                                ]} />

                                <Equation equation={[['f(x)', 'mx + t', ''], ['f(x)', '0,25x + 3', '']]} />
                            </NumberedList>
                        </div>
                    </div>
                </div>
            </div >
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