import React, { Component } from 'react';

export default class Headline extends Component {
    render() {
        return (
            <div className={'headline'}>
                {this.props.children}
            </div>
        );
    }
}