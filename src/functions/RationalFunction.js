import React, {Component} from 'react';
import Fraction from '../components/Fraction';
import Text from '../components/Text';
import {EmptySpace, EmptySpaceSmall, H, InlineSpace, Panel} from '../components/Utils';
import GraphTab from '../components/GraphTab';

import svg_tab2_1 from '../assets/rationalFunction/rationalFunction_tab2_1.svg';

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
