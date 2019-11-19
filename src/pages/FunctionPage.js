import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import TopBar from '../components/TopBar';

export default class FunctionPage extends Component {
    render() {
        let f = this.props.functions.find(f => f.id === this.props.match.params.id);

        if (f !== undefined)
            return (
                <div className="page page--function-page">
                    <Switch>
                        <Route path={`${this.props.match.url}/1`} component={props => <Tab1 {...props} func={f} />} />
                        <Route path={`${this.props.match.url}/2`} component={props => <Tab2 {...props} func={f} />} />
                        <Route path={`${this.props.match.url}/3`} component={props => <Tab3 {...props} func={f} />} />
                        <Route path={`${this.props.match.url}/4`} component={props => <Tab4 {...props} func={f} />} />

                        <Redirect to={`${this.props.match.url}/1`} />
                    </Switch>
                </div>
            );

        else return <Redirect to='/' />
    }
}


function Tab1({ func }) {
    return (
        <div>
            <TopBar page="function" func={func} tab={'1'} />

            {/* Graph */}
            {func.tabs[0]}
        </div>
    );
}

function Tab2({ func }) {
    return (
        <div>
            <TopBar page="function" func={func} tab={'2'} />

            {/* Besonderheiten */}
            {func.tabs[1]}
        </div>
    );
}

function Tab3({ func }) {
    return (
        <div>
            <TopBar page="function" func={func} tab={'3'} />

            {/* Berechnung */}
            {func.tabs[2]}
        </div>
    );
}

function Tab4({ func }) {
    return (
        <div>
            <TopBar page="function" func={func} tab={'4'} />

            {/* Aufgaben */}
            {func.tabs[3]}
        </div>
    );
}