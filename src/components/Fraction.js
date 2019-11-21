import React, {Component} from 'react';

export default class Fraction extends Component {
    render() {
        return (
            <div className={'fraction'}>
                <div className={'fraction__top'}>{this.props.top}</div>
                <div className={'fraction__bottom'}>{this.props.bottom}</div>
            </div>
        );
    }
}
