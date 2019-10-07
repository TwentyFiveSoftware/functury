import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <Link className="top-bar__logo" to="/">functury</Link>
                {(this.props.border === true ? <div className="top-bar__border" /> : <React.Fragment />)}
                <div className="top-bar__title">{this.props.title}</div>
                <div className="top-bar__children">{this.props.children}</div>
            </div>
        );
    }
}
