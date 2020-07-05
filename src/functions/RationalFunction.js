import React, {Component, Fragment} from 'react';
import Fraction from '../components/Fraction';
import Text from '../components/Text';
import {Button, EmptySpace, EmptySpaceSmall, H, InlineSpace, Panel, Solution} from '../components/Utils';
import GraphTab from '../components/GraphTab';

import svg_tab2_1 from '../assets/rationalFunction/rationalFunction_tab2_1.svg';
import Equation from "../components/Equation";
import NumberedList from "../components/NumberedList";
import svg_tab4_1 from "../assets/rationalFunction/rationalFunction_tab4_1.svg";

//

function RationalFunctionTab1() {
    let term = (v) => <div>y = <Fraction top={v.a} bottom={<div>x {v.o_b} {v.B}</div>}/> {v.o_c} {v.C}</div>;
    let sliders = [
        {
            title: 'Streckung in y-Richtung',
            variable: 'a',
            min: -5, max: 5, step: 0.1,
            F: () => <div>y = <Fraction top={<H>a</H>} bottom={'x + b'}/> + c</div>
        },
        {
            title: 'Verschiebung in x-Richtung',
            variable: 'b',
            min: -5, max: 5, step: 0.25,
            F: () => <div>y = <Fraction top={'a'} bottom={<div>x + <H>b</H></div>}/> + c</div>
        },
        {
            title: 'Verschiebung in y-Richtung',
            variable: 'c',
            min: -5, max: 5, step: 0.25,
            F: () => <div>y = <Fraction top={'a'} bottom={'x + b'}/> + <H>c</H></div>
        },
    ];

    return <GraphTab formula={'a / (x + b) + c'} variables={{a: 1, b: 0, c: 0}} Term={term} sliders={sliders}/>;
}

function RationalFunctionTab2() {
    return (
        <div className='info-page'>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Definitionslücken / Definitionsmenge</Text>
                <Text>Bei gebrochenrationalen Funktionen gibt es meist bestimmte Werte, die <b>nicht</b> für x eingesetzt werden können, da sonst der Nenner des Bruchterms Null ergibt.</Text>
                <Text>Die Menge dieser Werte heißt Definitionsmenge D.</Text>

                <EmptySpace/>
                <Text>Beispiel:</Text>
                <EmptySpaceSmall/>
                <Text>f(x) = <Fraction top={'1'} bottom={'x + 2'}/> <InlineSpace/>D = &#8474; \ {'{-2}'}</Text>
            </Panel>

            {/*<Panel largePadding={true}>*/}
            {/*    <Text config={{headline: true}}>Symmetrie</Text>*/}
            {/*    /!*<Text>Gebrochenrationale Funktionen sind punktsymmetrisch zum Ursprung (0 / 0), wenn jeder Punkt am .</Text>*!/*/}

            {/*    <Text>[INFO]:</Text>*/}
            {/*    <Text>Berechnen, ob eine Punktsymmetrie vorliegt:</Text>*/}
            {/*    /!*<EmptySpaceSmall/>*!/*/}
            {/*    <Equation equation={[['-f(x)', 'f(-x)', '']]}/>*/}
            {/*</Panel>*/}

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Asymptoten</Text>
                <Text>Gebrochenratonale Funktionen nähern sich im unendlichen stets einer parallelen Gerade zur x-Achse an, der <b>waagerechten Asymptote</b>.</Text>
                <EmptySpaceSmall/>
                <Text>Da die gebrochenrationalen Funktionen meist Definitionslücken besitzen, entstehen an diesen x-Werten sogenannte <b>senkrechte Asymptoten</b>.</Text>
                <EmptySpace/>

                <Text>Beispiel:</Text>

                <table>
                    <tbody>
                    <tr>
                        <td><img className={'info-svg'} src={svg_tab2_1} alt={''}/></td>
                        <td>
                            <Text>f(x) = <Fraction top={'1'} bottom={'x - 2'}/> + 1 <InlineSpace/>D = &#8474; \ {'{2}'}</Text>
                            <EmptySpace/>

                            <Text><span style={{color: '#4EAEEE'}}>waagerechte Asymptote:</span></Text>
                            <Text>x = 1</Text>
                            <EmptySpaceSmall/>
                            <Text><span style={{color: '#FE6055'}}>senkrechte Asymptote:</span></Text>
                            <Text>y = 2</Text>
                        </td>
                    </tr>
                    </tbody>
                </table>


            </Panel>

        </div>
    );
}

function RationalFunctionTab3() {
    return (
        <div className='info-page'>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Definitionslücken</Text>
                <EmptySpaceSmall/>
                <Text>Beispiel:</Text>
                <Text>f(x) = <Fraction top={'1'} bottom={'(x - 2)∙(x + 3)'}/></Text>

                <NumberedList>
                    <Fragment>
                        <Text>Setze den <b>Nenner</b> gleich Null</Text>
                        <Equation center={true} equation={[['(x - 2)∙(x + 3)', '0', '']]}/>
                    </Fragment>

                    <Fragment>


                        <Text>Löse die Gleichung nach x auf</Text>
                        <Equation center={true} equation={[
                            ['(x - 2)∙(x + 3)', '0', '| :(x + 3)'],
                            ['x - 2', '0', '| +2'],
                            ['x', '2', ''],
                        ]}/>

                        <Text>1. Definitionslücke: x = 2</Text>
                        <EmptySpaceSmall/>

                        <Equation center={true} equation={[
                            ['(x - 2)∙(x + 3)', '0', '| :(x - 2)'],
                            ['x + 3', '0', '| -3'],
                            ['x', '-3', ''],
                        ]}/>

                        <Text>2. Definitionslücke: x = -3</Text>
                    </Fragment>
                </NumberedList>
            </Panel>

            <Panel largePadding={true}>
                <Text config={{headline: true}}>Nullstellen</Text>

                <EmptySpaceSmall/>
                <Text>Beispiel:</Text>
                <Text>f(x) = <Fraction top={'3x + 1'} bottom={'x - 1'}/></Text>

                <NumberedList>
                    <Fragment>
                        <Text>Setze den <b>Zähler</b> gleich Null</Text>
                        <Equation center={true} equation={[['3x + 1', '0', '']]}/>
                    </Fragment>

                    <Fragment>


                        <Text>Löse die Gleichung nach x auf</Text>
                        <Equation center={true} equation={[
                            ['3x + 1', '0', '| -1'],
                            ['3x', '-1', '| :3'],
                            ['x', <div>-<Fraction top={1} bottom={3}/></div>, ''],
                        ]}/>

                        <Text>Nullstelle: x = -<Fraction top={1} bottom={3}/></Text>
                    </Fragment>
                </NumberedList>
            </Panel>


        </div>
    );
}

class RationalFunctionTab4 extends Component {
    state = {solutions: [false, false, false]};

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
                    <Text>Gib die Funktionsterme der Graphen an.</Text>

                    <img className={'info-svg'} src={svg_tab4_1} alt={''} style={{maxWidth: '40rem'}}/>

                    <EmptySpace/>
                    <Button title={'Lösung anzeigen'} click={() => this.toggleSolution(0)}/>
                    <EmptySpace/>

                    <Solution open={this.state.solutions[0]}>
                        <Text config={{headline: true}}>Lösung</Text>
                        <EmptySpaceSmall/>

                        <Text>Grüner Graph: f(x) = <Fraction top={1} bottom={'x - 2'}/> + 1</Text>
                        <Text>Roter Graph: f(x) = -<Fraction top={1} bottom={'x - 1'}/></Text>
                        <Text>Blauer Graph: f(x) = <Fraction top={2} bottom={'x'}/></Text>
                    </Solution>
                </Panel>

                <Panel largePadding={true}>
                    <Text config={{headline: true}}>Aufgabe - 2</Text>
                    <Text>Gib jeweils die Definitionsmenge der Funktion an.</Text>
                    <EmptySpace/>

                    <Text>a) f(x) = <Fraction top={'2x'} bottom={'x'}/></Text>
                    <EmptySpaceSmall/>
                    <Text>b) g(x) = -<Fraction top={1} bottom={'x - 4'}/> + 2</Text>
                    <EmptySpaceSmall/>
                    <Text>c) h(x) = <Fraction top={'0,5x + 1'} bottom={'2∙(x + 1)'}/></Text>
                    <EmptySpaceSmall/>
                    <Text>d) i(x) = <Fraction top={'25x + 9'} bottom={'(x + 5)∙(x - 0,25)'}/></Text>
                    <EmptySpaceSmall/>
                    <Text>e) j(x) = <Fraction top={'5x'} bottom={<div>x<sup>2</sup></div>}/> + 3</Text>
                    <EmptySpaceSmall/>
                    <Text>f) k(x) = <Fraction top={'25'} bottom={<div>(x + 3)<sup>2</sup></div>}/> + 3</Text>

                    <EmptySpace/>
                    <Button title={'Lösung anzeigen'} click={() => this.toggleSolution(1)}/>
                    <EmptySpace/>

                    <Solution open={this.state.solutions[1]}>
                        <Text config={{headline: true}}>Lösung</Text>
                        <EmptySpaceSmall/>
                        <Text>a) D = ℚ \ {'{0}'}</Text>
                        <EmptySpaceSmall/>
                        <Text>b) D = ℚ \ {'{4}'}</Text>
                        <EmptySpaceSmall/>
                        <Text>c) D = ℚ \ {'{-1}'}</Text>
                        <EmptySpaceSmall/>
                        <Text>d) D = ℚ \ {'{-5; 0,25}'}</Text>
                        <EmptySpaceSmall/>
                        <Text>e) D = ℚ \ {'{0}'}</Text>
                        <EmptySpaceSmall/>
                        <Text>f) D = ℚ \ {'{-3}'}</Text>
                    </Solution>
                </Panel>

                <Panel largePadding={true}>
                    <Text config={{headline: true}}>Aufgabe - 3</Text>
                    <Text>Gib jeweils die Nullstelle(n) an.</Text>
                    <EmptySpace/>

                    <Text>a) f(x) = <Fraction top={'1'} bottom={'x'}/></Text>
                    <EmptySpaceSmall/>
                    <Text>b) g(x) = -<Fraction top={'2x'} bottom={'2x + 5'}/></Text>
                    <EmptySpaceSmall/>
                    <Text>c) h(x) = <Fraction top={'25x + 9'} bottom={'x'}/></Text>
                    <EmptySpaceSmall/>
                    <Text>d) i(x) = <Fraction top={'0,5x + x'} bottom={'2∙(x + 3)'}/></Text>
                    <EmptySpaceSmall/>
                    <Text>e) j(x) = <Fraction top={'5x'} bottom={<div>x<sup>2</sup></div>}/></Text>
                    <EmptySpaceSmall/>
                    <Text>f) k(x) = <Fraction top={'0,5x∙(x + 1)∙(x - 3)'} bottom={'x + 2'}/></Text>

                    <EmptySpace/>
                    <Button title={'Lösung anzeigen'} click={() => this.toggleSolution(2)}/>
                    <EmptySpace/>

                    <Solution open={this.state.solutions[2]}>
                        <Text config={{headline: true}}>Lösung</Text>
                        <EmptySpaceSmall/>
                        <Text>a) Keine Nullstellen</Text>
                        <EmptySpaceSmall/>
                        <Text>b) x = 0</Text>
                        <EmptySpaceSmall/>
                        <Text>c) x = 0,36</Text>
                        <EmptySpaceSmall/>
                        <Text>d) x = 0</Text>
                        <EmptySpaceSmall/>
                        <Text>e) Keine Nullstellen</Text>
                        <EmptySpaceSmall/>
                        <Text>f) x<sub>1</sub> = 0; x<sub>2</sub> = -1; x<sub>3</sub> = 3</Text>
                    </Solution>
                </Panel>
            </div>
        );
    }
}


export default [
    <RationalFunctionTab1/>, <RationalFunctionTab2/>, <RationalFunctionTab3/>, <RationalFunctionTab4/>
];
