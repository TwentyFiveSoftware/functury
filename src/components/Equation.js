import React, { Component } from 'react';

export default class Equation extends Component {
    render() {
        let classes = 'equation text ';
        classes += (this.props.largeSpacing === undefined ? '' : (this.props.largeSpacing ? 'equation--large-spacing ' : ''));
        classes += (this.props.centerDark === undefined ? '' : (this.props.centerDark ? 'equation--center-dark ' : ''));

        return (
            <table className={classes}>
                <tbody>
                    {this.props.equation.map((step, index) => (
                        <tr key={index}>
                            <td>{step[0]}</td>
                            <td>=</td>
                            <td>{step[1]}</td>
                            <td>{step[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}