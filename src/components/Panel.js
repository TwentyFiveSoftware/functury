import React, { Component } from 'react';

export default class Panel extends Component {
    render() {
        return (
            <div className={'panel ' + (this.props.classes === undefined ? '' : this.props.classes.join(' '))}>
                {this.props.children}
            </div>
        );
    }
}
