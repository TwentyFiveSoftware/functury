import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import TopBar from '../components/TopBar';

export default class FunctionPage extends Component {
    render() {
        let f = this.props.functions.find(f => f.id === this.props.match.params.id);

        if (f !== undefined)
            return (
                <div className="page">
                    <TopBar title="" border={false}></TopBar>
                    <div className="content">
                        {f.content}
                    </div>
                </div>
            );

        else return <Redirect to="/" />
    }
}
