import React, { Component } from 'react';

import Equation from '../components/Equation';
import Fraction from '../components/Fraction';
import NumberedList from '../components/NumberedList';

import FunctionPlotter from '../components/FunctionPlotter';
import Slider from '../components/Slider';

//

class LinearFunctionTab1 extends Component {
    state = { m: 1, t: 0 }

    render() {
        return (
            <div className="info-page">
                <div className="panel">
                    <FunctionPlotter equation={x => this.state.m * x + this.state.t} />
                </div>

                <div className="right">
                    <div className="panel">
                        <div className="text text--center text--semi-big">y = {this.state.m}x {this.state.t < 0 ? '-' : '+'} {Math.abs(this.state.t)}</div>
                    </div>

                    <div className="panel panel--large-padding">
                        <Slider min={-5} max={5} value={this.state.m} step={0.2} title='Steigung'
                            f={<React.Fragment>y = <b className="text--highlighted">m</b>x + t</React.Fragment>}
                            change={value => this.setState({ m: value })} />

                        <div className="empty-space" />

                        <Slider min={-10} max={10} value={this.state.t} step={0.25} title='y-Achsenabschnitt'
                            f={<React.Fragment>y = mx + <b className="text--highlighted">t</b></React.Fragment>}
                            change={value => this.setState({ t: value })} />
                    </div>
                </div>

            </div>
        );
    }
}

function LinearFunctionTab2() {
    return (
        <div className="info-page"></div>
    );
}

function LinearFunctionTab3() {
    return (
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
    );
}

function LinearFunctionTab4() {
    return (
        <div className="info-page"></div>
    );
}


export default [<LinearFunctionTab1 />, <LinearFunctionTab2 />, <LinearFunctionTab3 />, <LinearFunctionTab4 />];