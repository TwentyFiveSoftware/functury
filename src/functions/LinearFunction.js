import React, {Component, Fragment} from 'react';

import Equation from '../components/Equation';
import Fraction from '../components/Fraction';
import NumberedList from '../components/NumberedList';
import Text from '../components/Text';
import GraphTab from '../components/GraphTab';
import {Button, EmptySpace, EmptySpaceSmall, H, InlineSpace, Panel, Solution} from '../components/Utils';

import svg_tab2_1 from '../assets/linearFunction/linearFunction_tab2_1.svg';
import svg_tab2_2 from '../assets/linearFunction/linearFunction_tab2_2.svg';
import svg_tab2_3 from '../assets/linearFunction/linearFunction_tab2_3.svg';
import svg_tab2_4 from '../assets/linearFunction/linearFunction_tab2_4.svg';
import svg_tab4_1 from '../assets/linearFunction/linearFunction_tab4_1.svg';
import svg_tab4_2 from '../assets/linearFunction/linearFunction_tab4_2.svg';

//

function LinearFunctionTab1() {
    let sliders = [
        {
            title: 'Steigung',
            variable: 'm',
            min: -5, max: 5, step: 0.1,
            F: () => <div>y = <H>m</H>x + t</div>
        },
        {
            title: 'y-Achsenabschnitt',
            variable: 't',
            min: -10, max: 10, step: 0.25,
            F: () => <div>y = mx + <H>t</H></div>
        }
    ];

    return <GraphTab formula={'m * x + t'} variables={{m: 1, t: 0}} Term={(v) => <div>y = {v.m}x {v.o_t} {v.T}</div>} sliders={sliders}/>;
}

function LinearFunctionTab2() {
    return (
        <div className='info-page'>
            <Panel largePadding={true}>
                <Text config={{headline: true}}>Verschiebung auf der y-Achse</Text>
                <Text>Bei der Funktion f(x) = mx + t steht m für die Steigung und t für den y-Achsenabschnitt.</Text>

                <EmptySpaceSmall/>
                <Text>Beispiel:</Text>
                <EmptySpaceSmall/>

                <div className='table'>
                    <div className={'table__side'}>
                        <Text>f(x) = 2x <b>+ 2</b></Text>
                        <img className={'info-svg'} src={svg_tab2_1} alt={''}/>
                        {/*<FunctionPlotter equation={x => 2 * x + 3} canZoom={false} id={1} style={{maxWidth: '30rem'}} config={{unitScale: 3, unitSpace: 40}}/>*/}
                    </div>
                    <div className={'table__side'}>
                        <Text>f(x) = 2x <b>- 2</b></Text>
                        <img className={'info-svg'} src={svg_tab2_2} alt={''}/>
                        {/*<FunctionPlotter equation={x => 2 * x - 3} canZoom={false} id={2} style={{maxWidth: '30rem'}} config={{unitScale: 2, unitSpace: 40}}/>*/}
                    </div>
                </div>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Steigende / Fallende Gerade</Text>
                <EmptySpace/>

                <table>
                    <tbody>
                    <tr>
                        <td><Text config={{semiBig: true, center: true}}>Steigende Gerade</Text></td>
                        <td><Text config={{semiBig: true, center: true}}>Fallende Gerade</Text></td>
                    </tr>
                    <tr>
                        <td><img className={'info-svg'} src={svg_tab2_3} alt={''}/></td>
                        <td><img className={'info-svg'} src={svg_tab2_4} alt={''}/></td>
                    </tr>
                    <tr>
                        <td><Text config={{center: true}}>Bei <b>positiver</b> Steigung</Text></td>
                        <td><Text config={{center: true}}>Bei <b>negativer</b> Steigung</Text></td>
                    </tr>
                    </tbody>
                </table>

                {/*<div className='table'>*/}
                {/*    <div className={'table__side'}>*/}
                {/*        <Text config={{semiBig: true}}>Steigende Gerade</Text>*/}
                {/*        <img className={'info-svg'} src={svg_tab2_3} alt={''}/>*/}
                {/*        /!*<FunctionPlotter equation={x => x} canZoom={false} id={3} style={{maxWidth: '30rem'}}/>*!/*/}
                {/*        <Text>Bei <b>positiver</b> Steigung</Text>*/}
                {/*    </div>*/}
                {/*    <div className={'table__side'}>*/}
                {/*        <Text config={{semiBig: true}}>Fallende Gerade</Text>*/}
                {/*        <img className={'info-svg'} src={svg_tab2_4} alt={''}/>*/}
                {/*        /!*<FunctionPlotter equation={x => -x} canZoom={false} id={4} style={{maxWidth: '30rem'}}/>*!/*/}
                {/*        <Text>Bei <b>negativer</b> Steigung</Text>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Panel>
        </div>
    );
}

function LinearFunctionTab3() {
    return (
        <div className='info-page'>
            <Panel largePadding={true}>
                <Text config={{headline: true}}>Nullstellen berechnen</Text>
                <EmptySpaceSmall/>
                <Text>Berechnung des Schnittpunkts mit der x-Achse</Text>

                <Equation center={true} equation={[['f(x)', '2x + 4', '']]}/>

                <NumberedList>
                    <Fragment>
                        <Text>Setze die Funktion gleich Null</Text>
                        <Equation center={true} equation={[['2x + 4', '0', '']]}/>
                    </Fragment>

                    <Fragment>
                        <Text>Löse die Gleichung nach x auf</Text>
                        <Equation center={true} equation={[
                            ['2x + 4', '0', '| -4'],
                            ['2x', '-4', '| :2'],
                            ['x', '-2', ''],
                        ]}/>

                        <EmptySpaceSmall/>
                        <Text>=> Schnittpunkt: S(-2 / 0)</Text>
                    </Fragment>
                </NumberedList>

                <EmptySpace/>
                <Text>Die x-Achse wird bei den Koordinaten S(-2 / 0) geschnitten.</Text>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Schnittpunkte zweier Geraden berechnen</Text>
                <EmptySpaceSmall/>
                <Text>f(x) = 4x + 2 <InlineSpace small={true}/> f(x) = -2x + 1</Text>

                <NumberedList>
                    <Fragment>
                        <Text>Setze die beiden Funktionen gleich</Text>
                        <Equation center={true} equation={[['f(x)', 'g(x)', ''], ['4x + 2', '-2x + 1', '']]}/>
                    </Fragment>

                    <Fragment>
                        <Text>Löse die Gleichung nach x auf</Text>
                        <Equation center={true} equation={[
                            ['4x + 2', '-2x + 1', '| -1'],
                            ['4x + 1', '-2x', '| -4x'],
                            ['4x + 1', '-2x - 4x', ''],
                            ['1', '-6x', '| :(-6)'],
                            [<div>-<Fraction top={1} bottom={6}/></div>, 'x', ''],
                        ]}/>
                    </Fragment>

                    <Fragment>
                        <Text>Setze x in eine der beiden Funktionen ein, wahlweise die Leichtere</Text>
                        <EmptySpaceSmall/>
                        <Text config={{center: true}}>x -> f(x)</Text>

                        <Equation center={true} equation={[
                            [<div>f(-<Fraction top={1} bottom={6}/>)</div>, <div>4 ∙ (-<Fraction top={1} bottom={6}/>) + 2</div>, ''],
                            ['', <div>-<Fraction top={4} bottom={6}/> + 2</div>, ''],
                            ['', <div>-<Fraction top={2} bottom={3}/> + 2</div>, ''],
                            ['', <Fraction top={4} bottom={3}/>, ''],
                        ]}/>
                    </Fragment>
                </NumberedList>

                <EmptySpace/>
                <Text>=> Schnittpunkt der Geraden bei S(-<Fraction top={1} bottom={6}/> / <Fraction top={4} bottom={3}/>)</Text>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Steigung berechnen</Text>
                <EmptySpaceSmall/>
                <Text>Berechnung der dazugehörigen Geradengleichung aus zwei gegebenen Punkten:</Text>

                <NumberedList>
                    <Fragment>
                        <Text>Berechne die <b>Steigung</b> m mithilfe der beiden Punkte:</Text>

                        <Equation center={true} dark={true} equation={[['m', <Fraction
                            top={<div>y<sub>2</sub> - y<sub>1</sub></div>}
                            bottom={<div>x<sub>2</sub> - x<sub>1</sub></div>}/>, '']]}/>
                    </Fragment>

                    <Text>Setze <b>m</b> und den x- und y-Wert von einer der beiden Punkte in die Gleichung <b>y = mx + t</b> ein und löse diese nach t auf.</Text>

                    <Fragment>
                        <Text>Setze die Funktionsgleichung aus dem berechneten m und t zu zusammen.</Text>
                        <Equation center={true} dark={true} equation={[['f(x)', 'mx + t', '']]}/>
                    </Fragment>
                </NumberedList>
            </Panel>

            <div>
                <Panel largePadding={true}>
                    <Text config={{headline: true}}>Beispiel - Steigung berechnen</Text>
                    <EmptySpaceSmall/>
                    <Text>P(2 / 3,5) <InlineSpace small={true}/> Q(-1 / 2,75)</Text>

                    <NumberedList>
                        <Equation largeSpacing={true} equation={[
                            ['m', <Fraction
                                top={<div>y<sub>2</sub> - y<sub>1</sub></div>}
                                bottom={<div>x<sub>2</sub> - x<sub>1</sub></div>}/>, ''],
                            ['', <Fraction top={'2,75 - 3,5'} bottom={'-1 - 2'}/>, ''],
                            ['', <Fraction top={'-0,75'} bottom={'-3'}/>, ''],
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

class LinearFunctionTab4 extends Component {
    state = {solutions: [false, false]};

    toggleSolution = index => {
        let {solutions} = this.state;
        solutions[index] = !solutions[index];
        this.setState({solutions});
    };

    render() {
        return (
            <div className='info-page'>
                <Panel largePadding={true}>
                    <Text config={{headline: true}}>Aufgabe - 1</Text>
                    <Text>Zeichne die Gerade f(x) = 3x - 2 und f(x) = - <Fraction top={3} bottom={4}/>x + 1 in ein Koordinatensystem. Bestimme auch die dazugehörigen Nullstellen.</Text>

                    <EmptySpace/>
                    <Button title={'Lösung anzeigen'} click={() => this.toggleSolution(0)}/>
                    <EmptySpace/>

                    <Solution open={this.state.solutions[0]}>
                        <Text config={{headline: true}}>Lösung</Text>
                        <EmptySpaceSmall/>

                        <div className='table table--break'>
                            <div className={'table__side'}>
                                <Text>f(x) = 3x - 2</Text>
                                {/*<FunctionPlotter equation={x => 3 * x - 2} canZoom={false} id={4} style={{maxWidth: '30rem'}} config={{unitScale: 1, unitSpace: 40}}/>*/}
                                <img className={'info-svg'} src={svg_tab4_1} alt={''}/>

                                <Equation equation={[
                                    ['3x - 2', '0', '| +2'],
                                    ['3x', '2', '| :3'],
                                    ['x', <Fraction top={2} bottom={3}/>, ''],
                                ]}/>
                            </div>
                            <div className={'table__side'}>
                                <Text>f(x) = -<Fraction top={3} bottom={4}/>x + 1</Text>
                                {/*<FunctionPlotter equation={x => (-3 / 4) * x + 1} canZoom={false} id={5} style={{maxWidth: '30rem'}} config={{unitScale: 1, unitSpace: 40}}/>*/}
                                <img className={'info-svg'} src={svg_tab4_2} alt={''}/>

                                <Equation equation={[
                                    [<div>-<Fraction top={3} bottom={4}/>x + 1</div>, '0', '| -1'],
                                    [<div>-<Fraction top={3} bottom={4}/>x</div>, '-1', <div>| :(-<Fraction top={3} bottom={4}/>)</div>],
                                    ['x', <div>-<Fraction top={4} bottom={3}/></div>, ''],
                                ]}/>
                            </div>
                        </div>
                    </Solution>
                </Panel>

                <Panel largePadding={true}>
                    <Text config={{headline: true}}>Aufgabe - 2</Text>
                    <Text>Gegeben sind die Geraden f(x) = 2x - 3 und g(x) = -0,5x + 4.</Text>
                    <Text>Berechne den Schnittpunkt der beiden Geraden.</Text>

                    <EmptySpace/>
                    <Button title={'Lösung anzeigen'} click={() => this.toggleSolution(1)}/>
                    <EmptySpace/>

                    <Solution open={this.state.solutions[1]}>
                        <Text config={{headline: true}}>Lösung</Text>
                        <EmptySpaceSmall/>

                        <Equation equation={[
                            ['f(x)', 'g(x)', ''],
                            ['2x - 3', '-0,5 + 4', '| +3'],
                            ['2x', '-0,5x + 7', '| +0,5x'],
                            ['2,5x', '7', '| :2,5'],
                            ['x', '2,8', '']
                        ]}/>

                        <EmptySpaceSmall/>
                        <Text>x -> f(x)</Text>
                        <EmptySpaceSmall/>

                        <Equation equation={[
                            ['f(2,8)', '2 ∙ 2,8 - 3', ''],
                            ['', '5,6 - 3', ''],
                            ['', '2,6', '']
                        ]}/>

                        <EmptySpace/>
                        <Text>=> Schnittpunkt der Geraden bei S(2,8 / 2,6)</Text>
                    </Solution>
                </Panel>

            </div>
        );
    }
}


export default [<LinearFunctionTab1/>, <LinearFunctionTab2/>, <LinearFunctionTab3/>, <LinearFunctionTab4/>];
