import React, { Component } from 'react';

export default class NumberedList extends Component {
    render() {
        return (
            <table className="list">
                <tbody>
                    {this.props.children.map((item, index) =>
                        <tr key={index}>
                            <td><div className="text text--dark-bold">{index + 1}.</div></td>
                            <td className="text--padding-horizontal">{item}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
