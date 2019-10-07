import React, { Component } from 'react';

import TopBar from './components/TopBar';

export default class FunctionPage extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="page">
                <TopBar title="" border={false}></TopBar>
                <div className="content">

                </div>
            </div>
        );
    }
}
