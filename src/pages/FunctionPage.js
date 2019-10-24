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

                        <table className="list">
                            <tbody>
                                <tr>
                                    <td><div className="text text--dark-bold">1.</div></td>
                                    <td>
                                        <div className="text text--multiline">Berechne die <b>Steigung</b> m mithilfe der beiden Punkte:</div>
                                        <div className="text text--pos-grid text--padding-vertical">
                                            <div className="text--grid-middle">
                                                <div className="text text text--margin-right text--dark-bold">m = </div>
                                                <div>
                                                    <div className="text text--dark-bold text--border-bottom-dark text--padding-horizontal">y<sub>2</sub> - y<sub>1</sub></div>
                                                    <div className="text text--dark-bold text--center">x<sub>2</sub> - x<sub>1</sub></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><div className="text text--dark-bold">2.</div></td>
                                    <td><div className="text text--multiline">
                                        Setze <b>m</b> und den x- und y-Wert von einer der beiden Punkte in die Gleichung <b>y = mx + t</b> ein und löse diese nach t auf.</div></td>
                                </tr>
                                <tr>
                                    <td><div className="text text--dark-bold">3.</div></td>
                                    <td>
                                        <div className="text text--multiline">Setze die Funktionsgleichung aus dem berechneten m und t zu zusammen.</div>
                                        <div className="text text--center">
                                            {/* <div className="text text--inline text--margin-right">-></div> */}
                                            <div className="text text--dark-bold text--inline">f(x) = mx + t</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <div className="panel panel--large-padding-vertical">
                            <div className="text text--headline">Beispiel - Steigung berechnen</div>
                            <div className="empty-space empty-space--small"></div>
                            <div className="text text--inline text--margin-right">P(2 / 3,5)</div>
                            <div className="text text--inline">Q(-1 / 2,75)</div>

                            <table className="list">
                                <tbody>
                                    <tr>
                                        <td><div className="text text--dark-bold">1.</div></td>
                                        <td className="text--padding-horizontal">
                                            <table className="equation text equation--large-spacing">
                                                <tbody>
                                                    <tr>
                                                        <td>m</td>
                                                        <td>=</td>
                                                        <td>
                                                            <div className="text--grid-middle">
                                                                <div>
                                                                    <div className="text text--border-bottom text--padding-horizontal">y<sub>2</sub> - y<sub>1</sub></div>
                                                                    <div className="text text--center">x<sub>2</sub> - x<sub>1</sub></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>=</td>
                                                        <td>
                                                            <div className="text--grid-middle">
                                                                <div>
                                                                    <div className="text text--border-bottom text--padding-horizontal">2,75 - 3,5</div>
                                                                    <div className="text text--center">-1 - 2</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>=</td>
                                                        <td>
                                                            <div className="text--grid-middle">
                                                                <div>
                                                                    <div className="text text--border-bottom text--padding-horizontal">-0,75</div>
                                                                    <div className="text text--center">-3</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>=</td>
                                                        <td>0,25</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><div className="text text--dark-bold">2.</div></td>
                                        <td className="text--padding-horizontal">
                                            <table className="equation text">
                                                <tbody>
                                                    <tr>
                                                        <td>y</td>
                                                        <td>=</td>
                                                        <td>mx + t</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3,5</td>
                                                        <td>=</td>
                                                        <td>0,25 ∙ 2 + t</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3,5</td>
                                                        <td>=</td>
                                                        <td>0,5 + t</td>
                                                        <td>| -0,5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>=</td>
                                                        <td>t</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><div className="text text--dark-bold">3.</div></td>
                                        <td className="text--padding-horizontal">
                                            <table className="equation text">
                                                <tbody>
                                                    <tr>
                                                        <td>f(x)</td>
                                                        <td>=</td>
                                                        <td>mx + t</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>f(x)</td>
                                                        <td>=</td>
                                                        <td>0,25x + 3</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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