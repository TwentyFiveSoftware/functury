import React, { Component } from 'react';

export default class Fraction extends Component {
    render() {
        return (
            <div className="text--grid-middle">
                <div>
                    <div className="text text--border-bottom text--padding-horizontal">{this.props.top}</div>
                    <div className="text text--center">{this.props.bottom}</div>
                </div>
            </div>
        );
    }
}
