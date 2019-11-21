import React, {Component} from 'react';

import Equation from '../components/Equation';
import Fraction from '../components/Fraction';
import NumberedList from '../components/NumberedList';

import FunctionPlotter from '../components/FunctionPlotter';
import Slider from '../components/Slider';
import Text from "../components/Text";
import {EmptySpace, InlineSpace, Panel} from "../components/Utils";

//

class LinearFunctionTab1 extends Component {
    state = {m: 1, t: 0};

    render() {
        return (
            <div className="info-page">
                <Panel>
                    <FunctionPlotter equation={x => this.state.m * x + this.state.t}/>
                </Panel>

                <div className="right">
                    <Panel>
                        <Text config={{center: true, semiBig: true}}>y = {this.state.m}x {this.state.t < 0 ? '-' : '+'} {Math.abs(this.state.t)}</Text>
                    </Panel>

                    <Panel largePaddingHorizontal={true}>
                        <Slider min={-5} max={5} value={this.state.m} step={0.2} title='Steigung'
                                f={<div>y = <b className="text--highlighted">m</b>x + t</div>}
                                change={value => this.setState({m: value})}/>

                        <EmptySpace/>

                        <Slider min={-10} max={10} value={this.state.t} step={0.25} title='y-Achsenabschnitt'
                                f={<div>y = mx + <b className="text--highlighted">t</b></div>}
                                change={value => this.setState({t: value})}/>
                    </Panel>
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
            <Panel largePadding={true}>
                <Text config={{headline: true}}>Steigung berechnen</Text>
                <EmptySpace small={true}/>
                <Text>Berechnung der dazugehörigen Geradengleichung aus zwei gegebenen Punkten:</Text>

                <NumberedList>
                    <React.Fragment>
                        <Text>Berechne die <b>Steigung</b> m mithilfe der beiden Punkte:</Text>

                        <Equation centerDark={true} equation={[['m', <Fraction
                            top={<div>y<sub>2</sub> - y<sub>1</sub></div>}
                            bottom={<div>x<sub>2</sub> - x<sub>1</sub></div>}/>, '']]}/>
                    </React.Fragment>

                    <Text>Setze <b>m</b> und den x- und y-Wert von einer der beiden Punkte in die Gleichung <b>y = mx + t</b> ein und löse diese nach t auf.</Text>

                    <React.Fragment>
                        <Text>Setze die Funktionsgleichung aus dem berechneten m und t zu zusammen.</Text>
                        <Equation centerDark={true} equation={[['f(x)', 'mx + t', '']]}/>
                    </React.Fragment>
                </NumberedList>
            </Panel>

            <div>
                <Panel largePadding={true}>
                    <Text config={{headline: true}}>Beispiel - Steigung berechnen</Text>
                    <EmptySpace small={true}/>
                    <Text>P(2 / 3,5) <InlineSpace small={true}/> Q(-1 / 2,75)</Text>

                    <NumberedList>
                        <Equation largeSpacing={true} equation={[
                            ['m', <Fraction
                                top={<div>y<sub>2</sub> - y<sub>1</sub></div>}
                                bottom={<div>x<sub>2</sub> - x<sub>1</sub></div>}/>, ''],
                            ['', <Fraction top={<div>2,75 - 3,5</div>} bottom={<div>-1 - 2</div>}/>, ''],
                            ['', <Fraction top={<div>-0,75</div>} bottom={<div>-3</div>}/>, ''],
                            ['', '0,25', '']
                        ]}/>

                        <Equation equation={[
                            ['y', 'mx + t', ''],
                            ['3,5', '0,25 ∙ 2 + t', ''],
                            ['3,5', '0,5 + t', '| -0,5'],
                            ['3', 't', '']
                        ]}/>

                        <Equation equation={[['f(x)', 'mx + t', ''], ['f(x)', '0,25x + 3', '']]}/>
                    </NumberedList>
                </Panel>
            </div>
        </div>
    );
}

function LinearFunctionTab4() {
    return (
        <div className="info-page"></div>
    );
}


export default [<LinearFunctionTab1/>, <LinearFunctionTab2/>, <LinearFunctionTab3/>, <LinearFunctionTab4/>];