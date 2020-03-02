import React, {Component} from 'react';

import {EmptySpace, Panel} from "./Utils";
import Text from "./Text";
import Slider from "./Slider";
import FunctionPlotter from "./FunctionPlotter";

export default class GraphTab extends Component {
    state = {variables: {}, formula: _ => 0};

    componentDidMount() {
        let {variables, formula} = this.props;
        this.setState({variables, formula: Function('x', ...Object.keys(variables), `return ${formula.toString()};`)});
    }

    render() {
        let {Term, sliders} = this.props;
        let {variables, formula} = this.state;

        let props = {};
        Object.keys(variables).forEach(v => {
            props[v] = variables[v];
            props[v.toUpperCase()] = Math.abs(variables[v]);
            props[`o_${v}`] = variables[v] >= 0 ? '+' : '-';
        });

        return (
            <div className='info-page'>
                <Panel>
                    <FunctionPlotter equation={x => formula(x, ...Object.values(variables))} id={Date.now()}/>
                </Panel>

                <div className='right'>
                    <Panel>
                        <Text config={{center: true, semiBig: true}}>
                            <Term {...props}/>
                        </Text>
                    </Panel>

                    <Panel largePaddingHorizontal={true}>
                        {sliders.map(({title, variable, min, max, step, F}, index) => (
                            <React.Fragment key={index}>
                                <Slider min={min} max={max} step={step} value={variables[variable]} title={title} f={<F/>} key={index}
                                        change={value => {
                                            let v = variables;
                                            v[variable] = value;
                                            this.setState({variables: v});
                                        }}/>
                                
                                <EmptySpace/>
                            </React.Fragment>
                        ))}
                    </Panel>
                </div>

            </div>
        );
    }
}
