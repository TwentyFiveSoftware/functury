import React, { Component } from 'react';

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar__logo">functury</div>
                <div className="top-bar__border" />
                <div className="top-bar__title">Funktionen | Übersicht</div>
                <div className="top-bar__children">{this.props.children}</div>
            </div>
        );
    }
}
