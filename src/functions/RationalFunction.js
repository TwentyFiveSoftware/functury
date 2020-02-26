import React, {Component} from 'react';
import Fraction from '../components/Fraction';

import FunctionPlotter from '../components/FunctionPlotter';
import Slider from '../components/Slider';
import Text from '../components/Text';
import {EmptySpace, Panel} from '../components/Utils';

//

class RationalFunctionTab1 extends Component {
    state = {a: 1, b: 0, c: 0};

    render() {
        return (
            <div className='info-page'>
                <Panel>
                    <FunctionPlotter equation={x => this.state.a / (x + this.state.b) + this.state.c} id={1}/>
                </Panel>

                <div className='right'>
                    <Panel>
                        <Text config={{center: true, semiBig: true}}>
                            y = <Fraction top={this.state.a} bottom={<div>x {this.state.b < 0 ? '-' : '+'} {Math.abs(this.state.b)}
                        </div>}/> {this.state.c < 0 ? '-' : '+'} {Math.abs(this.state.c)}</Text>
                    </Panel>

                    <Panel largePaddingHorizontal={true}>
                        <Slider min={-5} max={5} value={this.state.a} step={0.2} title='Streckung in y-Richtung'
                                f={<div>y = <Fraction top={<Text config={{center: true}}><b className='text--highlighted'>a</b></Text>} bottom={'x - b'}/> + c</div>}
                                change={value => this.setState({a: value})}/>

                        <EmptySpace/>

                        <Slider min={-10} max={10} value={this.state.b} step={0.2} title='Verschiebung in x-Richtung'
                                f={<div>y = <Fraction top={<Text config={{center: true}}>a</Text>} bottom={<div>x - <b className='text--highlighted'>b</b></div>}/> + c</div>}
                                change={value => this.setState({b: value})}/>

                        <EmptySpace/>

                        <Slider min={-10} max={10} value={this.state.c} step={0.25} title='Verschiebung in y-Richtung'
                                f={<div>y = <Fraction top={<Text config={{center: true}}>a</Text>} bottom={'x - b'}/> + <b className='text--highlighted'>c</b></div>}
                                change={value => this.setState({c: value})}/>
                    </Panel>
                </div>

            </div>
        );
    }
}

function RationalFunctionTab2() {
    return (
        <div className='info-page'>
        </div>
    );
}

function RationalFunctionTab3() {
    return (
        <div className='info-page'>
        </div>
    );
}

class RationalFunctionTab4 extends Component {
    state = {solutions: []};

    toggleSolution = index => {
        let {solutions} = this.state;
        solutions[index] = !solutions[index];
        this.setState({solutions});
    };

    render() {
        return (
            <div className='info-page'>
            </div>
        );
    }
}


export default [<RationalFunctionTab1/>, <RationalFunctionTab2/>, <RationalFunctionTab3/>, <RationalFunctionTab4/>];
