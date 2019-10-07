import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../components/TopBar';

export default class FrontPage extends Component {
    render() {
        return (
            <div className="page">
                <TopBar title='Funktionen | Übersicht' border={true}></TopBar>
                <div className="function-list-container">
                    {(this.props.functions.map((f, index) => (
                        <Link className="function-list-container__function" key={index} to={`/function/${f.id}`}>
                            <div className="function-list-container__name">{f.name}</div>
                            <div className="function-list-container__image" style={{ backgroundImage: `url(${f.image})` }} alt=" " />
                        </Link>
                    )))}
                </div>
            </div>
        );
    }
}
