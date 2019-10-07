import React, { Component } from 'react';

export default class FunctionPlotter extends Component {
    render() {
        return (
            <div className="function-plotter">
                <canvas width="600" height="530"></canvas>
            </div>
        );
    }
}
