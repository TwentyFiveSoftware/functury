import React, { Component } from 'react';

import CoordinateSystem from '../scripts/CoordinateSystem';

export default class FunctionPlotter extends Component {
    componentDidMount() {
        const ctx = document.querySelector('.function-plotter-canvas').getContext('2d');

        this.cosy = new CoordinateSystem(100, 100, { x: 10, y: 20 }, ctx);
        // cosy.plot(x => 2 * Math.tanh(0.5 * x));
        // cosy.plot(x => 1 / x);
        // this.cosy.plot(x => 0.75 * x);

        if (this.props.equation !== undefined)
            this.cosy.plot(this.props.equation);

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    componentDidUpdate() {
        this.cosy.redraw();
    }

    resizeCanvas = () => {
        let canvasContainer = document.querySelector('.function-plotter');
        let canvas = document.querySelector('.function-plotter-canvas');
        let width = Math.floor(canvasContainer.clientWidth);
        let height = Math.floor(width * (53 / 60));

        canvas.width = width;
        canvas.height = height;

        this.cosy.WIDTH = width;
        this.cosy.HEIGHT = height;
        this.cosy.zoom = 1;
        this.cosy.scale(this.cosy.zoom);
        this.cosy.redraw();
    }

    render() {
        return (
            <div className="function-plotter">
                <canvas className="function-plotter-canvas"></canvas>
            </div>
        );
    }
}