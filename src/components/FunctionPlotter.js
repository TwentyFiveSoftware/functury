import React, { Component } from 'react';

import CoordinateSystem from '../scripts/CoordinateSystem';

export default class FunctionPlotter extends Component {
    componentDidMount() {
        const ctx = document.querySelector('.function-plotter__canvas--' + this.props.id).getContext('2d');

        let {unitScale, unitSpace} = this.props.config === undefined ? {} : this.props.config;

        this.cosy = new CoordinateSystem(100, 100, { x: 12, y: 20 }, ctx, unitScale === undefined ? 1 : unitScale,
            unitSpace === undefined ? 50 : unitSpace, 0.005,
            10, { width: 15, height: 10 }, { x: 12, y: 21 }, 20, this.props.canZoom);

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
        let canvasContainer = document.querySelector('.function-plotter--' + this.props.id);
        let canvas = document.querySelector('.function-plotter__canvas--' + this.props.id);
        let width = Math.floor(canvasContainer.clientWidth);
        let height = Math.floor(width * 0.76);

        canvas.width = width;
        canvas.height = height;

        this.cosy.WIDTH = width;
        this.cosy.HEIGHT = height;
        this.cosy.zoom = 1;
        this.cosy.scale(this.cosy.zoom);
        this.cosy.redraw();
    };

    render() {
        return (
            <div className={'function-plotter function-plotter--' + this.props.id} style={this.props.style}>
                <canvas className={'function-plotter__canvas function-plotter__canvas--' + this.props.id}/>
            </div>
        );
    }
}