import React, {Component, Fragment} from 'react';

import Equation from '../components/Equation';
import Fraction from '../components/Fraction';
import Text from '../components/Text';
import GraphTab from '../components/GraphTab';
import NumberedList from '../components/NumberedList';
import {Button, EmptySpace, EmptySpaceSmall, H, Panel, Solution, Sqrt} from '../components/Utils';

import svg_tab2_1 from '../assets/quadraticFunction/quadraticFunction_tab2_1.svg';
import svg_tab2_2 from '../assets/quadraticFunction/quadraticFunction_tab2_2.svg';
import svg_tab2_3 from '../assets/quadraticFunction/quadraticFunction_tab2_3.svg';

//

function QuadraticFunctionTab1() {
    let sliders = [
        {
            title: 'Öffnungsfaktor',
            variable: 'a',
            min: -5, max: 5, step: 0.1,
            F: () => <div>y = <H>a</H>(x - d)<sup>2</sup> + e</div>
        },
        {
            title: 'Verschiebung in x-Richtung',
            variable: 'd',
            min: -5, max: 5, step: 0.25,
            F: () => <div>y = a(x - <H>d</H>)<sup>2</sup> + e</div>
        },
        {
            title: 'Verschiebung in y-Richtung',
            variable: 'e',
            min: -5, max: 5, step: 0.25,
            F: () => <div>y = a(x - d)<sup>2</sup> + <H>e</H></div>
        },
    ];

    return <GraphTab formula={'a * Math.pow((x - d), 2) + e'} variables={{a: 1, d: 0, e: 0}} Term={(v) => <div>y = {v.a}(x {v.o_d === '+' ? '-' : '+'} {v.D})<sup>2</sup> {v.o_e} {v.E}</div>} sliders={sliders}/>;
}

function QuadraticFunctionTab2() {
    return (
        <div className='info-page'>
            <Panel largePadding={true}>
                <Text config={{headline: true}}>Allgemein</Text>
                <Text>Quadratische Funktionen sind Funktionen, deren höchster Exponent 2 ist. Der Graph ist eine Parabel, deren höchster oder tiefster Punkt den Scheitelpunkt darstellt. Parabeln sind entweder nach oben oder nach unten geöffnet und immer achsensymmetrisch. Die Symmetrieachse verläuft
                    parallel zur y-Achse.</Text>

                <EmptySpace/>
                <EmptySpace/>
                <Text config={{semiBig: true}}><b>Darstellungsformen</b></Text>
                <EmptySpace/>

                <div className='table'>
                    <div className={'table__side'}>
                        <Text>Allgemeine Form:</Text>
                        <Text config={{highlighted: true}}>f(x) = ax<sup>2</sup> + bx + c</Text>
                    </div>
                    <div className={'table__side'}>
                        <Text>Scheitelpunktform:</Text>
                        <Text config={{highlighted: true}}>f(x) = a(x - d)<sup>2</sup> + e</Text>
                    </div>
                </div>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Transformationen</Text>
                <Text>Bei der Scheitelform lassen sich die Veränderungen leicht erkennen.</Text>

                <EmptySpace/>

                <Text><b>Verschiebung</b></Text>
                <EmptySpaceSmall/>
                <Text>Die Variable <b>d</b> stellt die Verschiebung in x-Richtung, der Summand <b>e</b> die Verschiebung in y-Richtung da.</Text>

                <EmptySpace/>

                <Text><b>Streckung und Stauchung</b></Text>
                <EmptySpaceSmall/>
                <Text>Der Graph wird durch den Faktor <b>a</b> in y-Richtung gesteckt oder gestaucht.</Text>
                <EmptySpaceSmall/>
                <Text>- a > 1: Streckung</Text>
                <Text>- 0 {'<'} a {'<'} 1: Streckung</Text>
                <EmptySpaceSmall/>
                <Text>Der Faktor befindet sich entweder direkt vor dem x oder, falls eine Verschiebung in x-Richtung vorliegt, vor der Klammer.</Text>

                <EmptySpace/>

                <Text><b>Spiegelung an der x-Achse</b></Text>
                <EmptySpaceSmall/>
                <Text>Falls der Faktor a negativ ist, ist die Parabel nach unten geöffnet, wodurch der Scheitelpunkt den höchsten Punkt darstellt.</Text>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Nullstellen</Text>
                <Text>Parabeln können je nach Verschiebung und Spiegelung zwei, eine oder keine Nullstellen besitzen.</Text>

                <EmptySpace/>
                <EmptySpace/>

                <div className='table'>
                    <div className={'table__side'}>
                        <Text config={{semiBig: true}}>Zwei Nullstellen</Text>
                        <img className={'info-svg'} src={svg_tab2_3} alt={''}/>
                    </div>
                    <div className={'table__side'}>
                        <Text config={{semiBig: true}}>Eine Nullstelle</Text>
                        <img className={'info-svg'} src={svg_tab2_1} alt={''}/>
                    </div>
                    <div className={'table__side'}>
                        <Text config={{semiBig: true}}>Keine Nullstelle</Text>
                        <img className={'info-svg'} src={svg_tab2_2} alt={''}/>
                    </div>
                </div>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Mitternachtsformel</Text>
                <Text>Die Mitternachtsformel ist die allgemeine Lösungsformel für quadratische Gleichungen. Sie lautet:</Text>

                <Equation center={true} equation={[[<div>x<sub>1,2</sub></div>, <div>
                    <Fraction top={<div>-b ± <Sqrt>b<sup>2</sup> - 4ac</Sqrt></div>} bottom={'2a'}/>
                </div>, '']]}/>

                <EmptySpace/>
                <Text>Die Variablen der Mitternachtsformel (a, b, c) sind zugleich die Variablen aus der allgemeinen Darstellungsform für quadratische Funktionen (f(x) = ax<sup>2</sup> + bx + c).</Text>

                <EmptySpace/>
                <EmptySpace/>
                <Text><b>Diskriminante D</b></Text>
                <EmptySpaceSmall/>
                <Text>In der Mitternachtsformel entscheidet der Term unter der Wurzel, die Diskriminante, wie viele Lösungen die quadratische Gleichung hat.</Text>
                <EmptySpaceSmall/>
                <Text>- D > 0 : 2 Lösungen</Text>
                <Text>- D = 0 : 1 Lösung</Text>
                <Text>- D {'<'} 0 : keine Lösung</Text>

                <EmptySpace/>

                <Equation center={true} equation={[[<div>x<sub>1,2</sub></div>, <div>
                    <Fraction top={<div>-b ± <Sqrt><H>b<sup>2</sup> - 4ac</H></Sqrt></div>} bottom={'2a'}/>
                </div>, '']]}/>
            </Panel>

        </div>
    );
}

function QuadraticFunctionTab3() {
    return (
        <div className='info-page'>
            <Panel largePadding={true}>
                <Text config={{headline: true}}>Nullstellen berechnen</Text>
                <EmptySpaceSmall/>
                <Text>Die Berechnung der Nullstellen erfolgt aus der allgemeinen Darstellung (ax<sup>2</sup> + bx + c). Setzte diese anschließend gleich Null und wähle je nach vorliegender Form einen der folgenden Lösungswege.</Text>

                <EmptySpaceSmall/>

                <Text>Quadratische Gleichungen der Form…</Text>

                <NumberedList>
                    <Fragment>
                        <Text config={{smallHeight: true}}><b>ax<sup>2</sup> + c = 0</b></Text>
                        <EmptySpace/>

                        <Text>Beispiel:</Text>
                        <Text>0,5x<sup>2</sup> - 4,5 = 0</Text>

                        <EmptySpaceSmall/>

                        <Equation equation={[
                            [<div>0,5x<sup>2</sup> - 4,5</div>, '0', '| +4,5'],
                            [<div>0,5x<sup>2</sup></div>, '4,5', '| ∙2'],
                            [<div>x<sup>2</sup></div>, '9', '| √'],
                            ['x', '±3', '']
                        ]}/>

                        <EmptySpaceSmall/>

                        <Text>Nullstellen: x<sub>1</sub> = -3; x<sub>2</sub> = 3</Text>

                    </Fragment>
                    <Fragment>
                        <Text config={{smallHeight: true}}><b>ax<sup>2</sup> + bx = 0</b></Text>
                        <EmptySpace/>

                        <Text>Beispiel:</Text>
                        <Text>3x<sup>2</sup> + 6x = 0</Text>

                        <EmptySpaceSmall/>

                        <Equation equation={[
                            [<div>3x<sup>2</sup> + 6x</div>, '0', <div>| :x -> x<sub>1</sub> = 0</div>],
                            [<div>3x + 6</div>, '-6', '| -6'],
                            [<div>3x</div>, '-6', '| :3'],
                            [<div>x</div>, '-2', ''],
                        ]}/>

                        <EmptySpaceSmall/>

                        <Text>Nullstellen: x<sub>1</sub> = 0; x<sub>2</sub> = -2</Text>
                    </Fragment>
                    <Fragment config={{smallHeight: true}}>
                        <Text><b>ax<sup>2</sup> + bx + c = 0</b></Text>
                        <EmptySpace/>

                        <Text>Beispiel:</Text>
                        <Text>2x<sup>2</sup> + 16x + 14 = 0</Text>

                        <EmptySpaceSmall/>

                        <Equation equation={[
                            [<div>x<sub>1,2</sub></div>, <div>
                                <Fraction top={<div>-16 ± <Sqrt>16<sup>2</sup> - 4∙2∙14</Sqrt></div>} bottom={'2∙2'}/>
                            </div>, ''],
                            [<div>x<sub>1,2</sub></div>, <div>
                                <Fraction top={<div>-16 ± <Sqrt>144</Sqrt></div>} bottom={'4'}/>
                            </div>, ''],
                            [<div>x<sub>1,2</sub></div>, <div>
                                <Fraction top={<div>-16 ± 12</div>} bottom={'4'}/>
                            </div>, ''],
                            [<div>x<sub>1</sub></div>, <div><Fraction top={<div>-4</div>} bottom={'4'}/> = -1</div>, ''],
                            [<div>x<sub>2</sub></div>, <div>
                                <Fraction top={<div>-16 - 12</div>} bottom={'4'}/> = <Fraction top={<div>-28</div>} bottom={'4'}/> = -7
                            </div>, ''],
                        ]}/>

                        <EmptySpaceSmall/>

                        <Text>Nullstellen: x<sub>1</sub> = -1; x<sub>2</sub> = -7</Text>
                    </Fragment>
                </NumberedList>
            </Panel>


            <Panel largePadding={true}>
                <Text config={{headline: true}}>Scheitelpunktform in allgemeine Form umwandeln</Text>
                <EmptySpaceSmall/>
                <Text>Beispiel:</Text>
                <Text>f(x) = 2(x - 3)<sup>2</sup> + 5</Text>

                <NumberedList>
                    <Fragment>
                        <Text>Binomische Formel</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>2(x - 3)<sup>2</sup> + 5</div>, ''],
                            ['', <div>2(x<sup>2</sup> - 2∙3∙x + 9) + 5</div>, ''],
                            ['', <div>2(x<sup>2</sup> - 6x + 9) + 5</div>, ''],
                        ]}/>

                    </Fragment>
                    <Fragment>
                        <Text>Die Klammer mit dem Faktor a multiplizieren</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>2x<sup>2</sup> - 12x + 18 + 5</div>, ''],
                        ]}/>

                    </Fragment>
                    <Fragment>
                        <Text>Zusammenfassen</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>2x<sup>2</sup> - 12x + 23</div>, ''],
                        ]}/>

                    </Fragment>
                </NumberedList>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Allgemeine Form in Scheitelpunktform umwandeln</Text>
                <EmptySpaceSmall/>
                <Text>Beispiel:</Text>
                <Text>f(x) = 1,5x<sup>2</sup> - 3x + 6</Text>

                <NumberedList>
                    <Fragment>
                        <Text config={{smallHeight: true}}>Vorfaktor von x<sup>2</sup> ausklammern</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>1,5x<sup>2</sup> - 3x + 6</div>, ''],
                            ['', <div>1,5(x<sup>2</sup> - 2x + 4)</div>, ''],
                        ]}/>

                    </Fragment>
                    <Fragment>
                        <Text>Zweiten Teil der binomischen Formel (b) ermitteln</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>1,5(x<sup>2</sup> - 2∙1∙x + 4)</div>, ''],
                        ]}/>
                        <EmptySpaceSmall/>
                        <Text>-> Binomsiche Formel: a = 2; b = 1</Text>

                    </Fragment>
                    <Fragment>
                        <Text>Quadratisch ergänzen, damit die bionmische Formel angewendet werden kann</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>1,5(x<sup>2</sup> - 2∙1∙x + 1<sup>2</sup> - 1<sup>2</sup> + 4)</div>, ''],
                        ]}/>

                    </Fragment>
                    <Fragment>
                        <Text>Binomische Formel anwenden</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>1,5[(x - 1)<sup>2</sup> - 1<sup>2</sup> + 4]</div>, ''],
                        ]}/>
                        <EmptySpaceSmall/>
                        <Text>(2. Binomische Formel: (a - b)<sup>2</sup> = a<sup>2</sup> - 2∙a∙b + b<sup>2</sup>)</Text>

                    </Fragment>
                    <Fragment>
                        <Text>Zusammenfassen</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>1,5[(x - 1)<sup>2</sup> + 3]</div>, ''],
                        ]}/>

                    </Fragment>
                    <Fragment>
                        <Text>Die äußere Klammer ausmultiplizieren</Text>
                        <Equation center={true} equation={[
                            ['f(x)', <div>1,5(x - 1)<sup>2</sup> + 4,5</div>, ''],
                        ]}/>

                    </Fragment>
                </NumberedList>
                <EmptySpace/>

                <Text>Scheitelpunktform:</Text>
                <Equation center={false} equation={[
                    ['f(x)', <div>1,5(x - 1)<sup>2</sup> + 4,5</div>, ''],
                ]}/>
            </Panel>
        </div>
    );
}

class QuadraticFunctionTab4 extends Component {
    state = {solutions: [false]};

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
                    <Text>Berechne jeweils die Nullstelle(n).</Text>
                    <EmptySpace/>

                    <Text>a) f(x) = x<sup>2</sup> - 3x - 40</Text>
                    <EmptySpaceSmall/>
                    <Text>b) f(x) = 0,5x<sup>2</sup> - 4x + 6</Text>
                    <EmptySpaceSmall/>
                    <Text>c) f(x) = x<sup>2</sup> + 3x + 2</Text>
                    <EmptySpaceSmall/>
                    <Text>d) f(x) = x<sup>2</sup> + 11x + 30</Text>
                    <EmptySpaceSmall/>
                    <Text>e) f(x) = 3x<sup>2</sup> + 9x + 6</Text>
                    <EmptySpaceSmall/>

                    <EmptySpace/>
                    <Button title={'Lösungen anzeigen'} click={() => this.toggleSolution(0)}/>
                    <EmptySpace/>

                    <Solution open={this.state.solutions[0]}>
                        <Text config={{headline: true}}>Lösungen</Text>
                        <EmptySpaceSmall/>
                        <Text>a) x<sub>1</sub> = -5; x<sub>2</sub> = 8</Text>
                        <EmptySpaceSmall/>
                        <Text>b) x<sub>1</sub> = 2; x<sub>2</sub> = 6</Text>
                        <EmptySpaceSmall/>
                        <Text>c) x<sub>1</sub> = -1; x<sub>2</sub> = -2</Text>
                        <EmptySpaceSmall/>
                        <Text>d) x<sub>1</sub> = -6; x<sub>2</sub> = -5</Text>
                        <EmptySpaceSmall/>
                        <Text>e) x<sub>1</sub> = -2; x<sub>2</sub> = -1</Text>
                    </Solution>
                </Panel>

            </div>
        );
    }
}


export default [<QuadraticFunctionTab1/>, <QuadraticFunctionTab2/>, <QuadraticFunctionTab3/>, <QuadraticFunctionTab4/>];
