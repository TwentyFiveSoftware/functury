import React, { Component } from 'react';

import Panel from '../components/Panel';
import FunctionPlotter from '../components/FunctionPlotter';
import Headline from '../components/Headline';
import Slider from '../components/Slider';
import EmptySpace from '../components/EmptySpace';

export default class LinearFunction extends Component {

    state = {
        m: 1,
        t: 0
    }

    render() {
        return (
            <React.Fragment>
                <Panel classes={['headline']}>Lineare Funktionen</Panel>
                <Panel><FunctionPlotter equation={x => this.state.m * x + this.state.t} /></Panel>
                <Panel>
                    <Headline>Steigung (m)</Headline>
                    <Slider min={-10} max={10} step={0.25} id={'m'} value={this.state.m} change={newValue => this.setState({ m: newValue })} />
                    <EmptySpace height={30} />
                    <Headline>y-Achsenabschnitt (t)</Headline>
                    <Slider min={-10} max={10} step={0.5} id={'t'} value={this.state.t} change={newValue => this.setState({ t: newValue })} />
                </Panel>
            </React.Fragment>
        )
    }
}
