import React, { Component } from 'react'

export default class EmptySpace extends Component {
    render() {
        return (
            <div className="empty-space" style={{ height: (this.props.height === undefined ? 0 : this.props.height) + 'px' }} />
        );
    }
}
