import React, {Component} from 'react';

import Equation from '../components/Equation';
import Fraction from '../components/Fraction';
import NumberedList from '../components/NumberedList';

import FunctionPlotter from '../components/FunctionPlotter';
import Slider from '../components/Slider';
import Text from '../components/Text';
import {EmptySpace, InlineSpace, Panel} from '../components/Utils';

//

class LinearFunctionTab1 extends Component {
    state = {m: 1, t: 0};

    render() {
        return (
            <div className='info-page'>
                <Panel>
                    <FunctionPlotter equation={x => this.state.m * x + this.state.t} id={0}/>
                </Panel>

                <div className='right'>
                    <Panel>
                        <Text config={{center: true, semiBig: true}}>y = {this.state.m}x {this.state.t < 0 ? '-' : '+'} {Math.abs(this.state.t)}</Text>
                    </Panel>

                    <Panel largePaddingHorizontal={true}>
                        <Slider min={-5} max={5} value={this.state.m} step={0.2} title='Steigung'
                                f={<div>y = <b className='text--highlighted'>m</b>x + t</div>}
                                change={value => this.setState({m: value})}/>

                        <EmptySpace/>

                        <Slider min={-10} max={10} value={this.state.t} step={0.25} title='y-Achsenabschnitt'
                                f={<div>y = mx + <b className='text--highlighted'>t</b></div>}
                                change={value => this.setState({t: value})}/>
                    </Panel>
                </div>

            </div>
        );
    }
}

function LinearFunctionTab2() {
    return (
        <div className='info-page'>
            <Panel largePadding={true}>
                <Text config={{headline: true}}>Verschiebung auf der y-Achse</Text>
                <Text>Bei der Funktion f(x) = mx + t steht m für die Steigung und t für den y-Achsenabschnitt.</Text>

                <EmptySpace small={true}/>
                <Text>Beispiel:</Text>
                <EmptySpace small={true}/>

                <div className="table">
                    <div className={'table__side'}>
                        <Text>f(x) = 2x - 3</Text>
                        <FunctionPlotter equation={x => 2 * x - 3} canZoom={false} id={1} style={{maxWidth: '30rem'}} config={{unitScale: 4, unitSpace: 40}}/>
                    </div>
                    <div className={'table__side'}>
                        <Text>f(x) = 2x + 2</Text>
                        <FunctionPlotter equation={x => 2 * x + 2} canZoom={false} id={2} style={{maxWidth: '30rem'}} config={{unitScale: 4, unitSpace: 40}}/>
                    </div>
                </div>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Steigende / Fallende Gerade</Text>
                <EmptySpace/>

                <div className="table">
                    <div className={'table__side'}>
                        <Text config={{dark: true}}>Steigende Gerade</Text>
                        <FunctionPlotter equation={x => x} canZoom={false} id={3} style={{maxWidth: '30rem'}}/>
                        <Text>Bei positiver Steigung</Text>
                    </div>
                    <div className={'table__side'}>
                        <Text config={{dark: true}}>Fallende Gerade</Text>
                        <FunctionPlotter equation={x => -x} canZoom={false} id={4} style={{maxWidth: '30rem'}}/>
                        <Text>Bei negativer Steigung</Text>
                    </div>
                </div>
            </Panel>
        </div>
    );
}

function LinearFunctionTab3() {
    return (
        <div className='info-page'>
            <Panel largePadding={true}>
                <Text config={{headline: true}}>Nullstellen berechnen</Text>
                <Text>Berechnung des Schnittpunkts mit der x-Achse</Text>

                <Equation centerDark={true} equation={[['f(x)', '2x + 4', '']]}/>

                <NumberedList>
                    <React.Fragment>
                        <Text>Setze die Funktion gleich Null</Text>
                        <Equation centerDark={true} equation={[['2x + 4', '0', '']]}/>
                    </React.Fragment>

                    <React.Fragment>
                        <Text>Löse die Gleichung nach x auf</Text>
                        <Equation centerDark={true} equation={[
                            ['2x + 4', '0', '| -4'],
                            ['2x', '-4', '| :2'],
                            ['x', '-2', ''],
                        ]}/>

                        <EmptySpace small={true}/>
                        <Text>=> Schnittpunkt: S(-2 / 0)</Text>
                    </React.Fragment>
                </NumberedList>

                <EmptySpace/>
                <Text>Die x-Achse wird bei den Koordinaten S(-2 / 0) geschnitten.</Text>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Schnittpunkte zweier Geraden berechnen</Text>
                <Text>f(x) = 4x + 2 <InlineSpace small={true}/> f(x) = -2x + 1</Text>

                <NumberedList>
                    <React.Fragment>
                        <Text>Setze die beiden Funktionen gleich</Text>
                        <Equation centerDark={true} equation={[['f(x)', 'g(x)', ''], ['4x + 2', '-2x + 1', '']]}/>
                    </React.Fragment>

                    <React.Fragment>
                        <Text>Löse die Gleichung nach x auf</Text>
                        <Equation centerDark={true} equation={[
                            ['4x + 2', '-2x + 1', '| -1'],
                            ['4x + 1', '-2x', '| -4x'],
                            ['4x + 1', '-2x - 4x', ''],
                            ['1', '-6x', '| :(-6)'],
                            [<Fraction top={-1} bottom={6}/>, 'x', ''],
                        ]}/>
                    </React.Fragment>

                    <React.Fragment>
                        <Text>Setze x in eine der beiden Funktionen ein, wahlweise die Leichtere</Text>
                        <EmptySpace small={true}/>
                        <Text config={{center: true}}>x -> f(x)</Text>

                        <Equation centerDark={true} equation={[
                            ['f(-1/6)', '4 ∙ (-1/6) + 2', ''],
                            ['', '- 4/6 + 2', ''],
                            ['', '- 2/3 + 2', ''],
                            ['', <Fraction top={4} bottom={3}/>, ''],
                        ]}/>
                    </React.Fragment>
                </NumberedList>

                <EmptySpace/>
                <Text>=> Schnittpunkt der Geraden bei S(-1/6 / 4/3)</Text>
            </Panel>

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
        <div className='info-page'>
            <Panel largePadding={true}>
                <Text config={{headline: true}}>Aufgabe - 1</Text>
                <Text>Zeichne die Gerade f(x) = 3x - 2 und f(x) = -3/4x + 1 in ein Koordinatensystem. Bestimme auch die dazugehörigen Nullstellen.</Text>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Aufgabe - 1 - Lösung</Text>

                <div className="table">
                    <div className={'table__side'}>
                        <Text>f(x) = 3x - 2</Text>
                        <FunctionPlotter equation={x => 3 * x - 2} canZoom={false} id={4} style={{maxWidth: '30rem'}} config={{unitScale: 1, unitSpace: 40}}/>

                        <Equation centerDark={true} equation={[
                            ['3x - 2', '0', '| +2'],
                            ['3x', '2', '| :3'],
                            ['x', <Fraction top={2} bottom={3}/>, ''],
                        ]}/>
                    </div>
                    <div className={'table__side'}>
                        <Text>f(x) = -3/4x + 1</Text>
                        <FunctionPlotter equation={x => (-3 / 4) * x + 1} canZoom={false} id={5} style={{maxWidth: '30rem'}} config={{unitScale: 1, unitSpace: 40}}/>

                        <Equation centerDark={true} equation={[
                            ['-3/4x + 1', '0', '| -1'],
                            ['-3/4x', '-1', '| :(-3/4)'],
                            ['x', <Fraction top={-4} bottom={3}/>, ''],
                        ]}/>
                    </div>
                </div>
            </Panel>


            <Panel largePadding={true}>
                <Text config={{headline: true}}>Aufgabe - 2</Text>
                <Text>Gegeben sind die Geraden f(x) = 2x - 3 <InlineSpace small={true}/> g(x) = -0,5x + 4.</Text>
                <Text>Berechne die Schnittpunkte der beiden Geraden.</Text>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Aufgabe - 2 - Lösung</Text>

                <Equation centerDark={true} equation={[
                    ['f(x)', 'g(x)', ''],
                    ['2x - 3', '-0,5 + 4', '| +3'],
                    ['2x', '-0,5x + 7', '| +0,5x'],
                    ['2,5x', '7', '| :2,5'],
                    ['x', '2,8', '']
                ]}/>

                <EmptySpace small={true}/>
                <Text config={{center: true}}>x -> f(x)</Text>
                <EmptySpace small={true}/>

                <Equation centerDark={true} equation={[
                    ['f(2,8)', '2 ∙ 2,8 - 3', ''],
                    ['', '5,6 - 3', ''],
                    ['', '2,6', '']
                ]}/>

                <EmptySpace/>
                <Text>=> Schnittpunkt der Geraden bei S(2,8 / 2,6)</Text>
            </Panel>
        </div>
    );
}


export default [<LinearFunctionTab1/>, <LinearFunctionTab2/>, <LinearFunctionTab3/>, <LinearFunctionTab4/>];