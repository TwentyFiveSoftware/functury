import React, { Component } from 'react';

export default class NumberedList extends Component {
    render() {
        return (
            <table className="list">
                <tbody>
                    {this.props.children.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}.</td>
                            <td>{item}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
