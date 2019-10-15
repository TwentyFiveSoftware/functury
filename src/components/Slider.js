import React, { Component } from 'react';

export default class Slider extends Component {
    state = {
        value: this.props.value
    }

    componentDidMount() {
        let handle = document.querySelector(`.slider#${this.props.id} .slider__bar .slider__handle`);
        let sliderBar = document.querySelector(`.slider#${this.props.id} .slider__bar`);
        let sliderLeft = sliderBar.getBoundingClientRect().x;
        let sliderWidth = sliderBar.getBoundingClientRect().width;

        let pointerDown = false;

        handle.addEventListener('pointerdown', () => pointerDown = true);

        window.addEventListener('pointermove', e => {
            e.preventDefault();

            if (pointerDown) {
                // CALCULATE PERCENTAGE
                let valuePercentage = (e.clientX - sliderLeft) / sliderWidth;

                // CLAMP VALUES BETWEEN 0% AND 100%
                if (valuePercentage > 1) valuePercentage = 1;
                if (valuePercentage < 0) valuePercentage = 0;

                // CALCULATE NEW VALUE FROM PERCENTAGE AND FIX IT TO STEP SIZE
                let newValue = valuePercentage * (this.props.max - this.props.min) + this.props.min;
                newValue = Math.round(newValue / this.props.step) * this.props.step;

                // ROUND TO x.xxx
                newValue = Math.round(newValue * 1000) / 1000;

                // SET STATE TO NEW VALUE
                if (newValue !== this.state.value) {
                    this.setState({ value: newValue });
                    this.props.change(this.state.value);
                }
            }
        });

        window.addEventListener('pointerup', () => pointerDown = false);
        window.addEventListener('pointerleave', () => pointerDown = false);
    }

    render() {
        let middleValue = (this.props.max + this.props.min) / 2;

        let left = 100 * (this.state.value - this.props.min) / (this.props.max - this.props.min)


        return (
            <div className="slider" id={this.props.id}>
                <div className="slider__bar">
                    <div className="slider__handle" style={{ left: `${left}%` }}>
                        <div className="slider__value">{this.state.value}</div>
                    </div>
                </div>
                <div className="slider__labels">
                    <span>{this.props.min}</span>
                    <span>{middleValue}</span>
                    <span>{this.props.max}</span>
                </div>
            </div>
        );
    }
}