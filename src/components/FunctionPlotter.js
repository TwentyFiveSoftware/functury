import React, { Component } from 'react';

import CoordinateSystem from '../scripts/FunctionPlotterScript';

export default class FunctionPlotter extends Component {
    componentDidMount() {
        const ctx = document.querySelector('.function-plotter-canvas').getContext('2d');

        let cosy = new CoordinateSystem(600, 530, { x: 10, y: 20 }, ctx);
        // cosy.plot(x => 2 * Math.tanh(0.5 * x));
        // cosy.plot(x => 1 / x);
        cosy.plot(x => 0.75 * x);
    }

    render() {
        return (
            <div className="function-plotter">
                <canvas width="600" height="530" className="function-plotter-canvas"></canvas>
            </div>
        );
    }
}