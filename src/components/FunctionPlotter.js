import React, { Component } from 'react';

import CoordinateSystem from '../scripts/CoordinateSystem';

export default class FunctionPlotter extends Component {
    componentDidMount() {
        const ctx = document.querySelector('.function-plotter__canvas').getContext('2d');

        this.cosy = new CoordinateSystem(100, 100, { x: 12, y: 20 }, ctx, 1, 50, 0.005, 10, { width: 15, height: 10 }, { x: 12, y: 21 }, 20);

        if (this.props.equation !== undefined)
            this.cosy.plot(this.props.equation);

        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeCanvas);
    }

    componentDidUpdate() {
        this.cosy.redraw();
    }

    resizeCanvas = () => {
        let canvasContainer = document.querySelector('.function-plotter');
        let canvas = document.querySelector('.function-plotter__canvas');
        let width = Math.floor(canvasContainer.clientWidth);
        let height = Math.floor(width * 0.76);

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
                <canvas className="function-plotter__canvas"></canvas>
            </div>
        );
    }
}