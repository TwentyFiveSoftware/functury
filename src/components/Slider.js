import React, { Component } from 'react';

export default class Slider extends Component {
    render() {
        let { min, max, step, title, f, value } = this.props;
        let middleValue = min + (max - min) / 2;

        return (
            <React.Fragment>
                <div>
                    <div className="text text--headline">{title}</div>
                    <div className="text text--small text--light">{f}</div>
                </div>

                <div className="slider">
                    <input type="range" min={min} max={max} value={value} step={step} className="slider__input" onChange={e => this.props.change(Number(e.target.value))} />
                    <div className="slider__labels">
                        <div>{min}</div>
                        <div>{middleValue}</div>
                        <div>{max}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
