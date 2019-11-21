import React, {Component} from 'react';

export default class Text extends Component {
    render() {
        let {config} = this.props;
        config = config === undefined ? {} : config;

        let classes = '';
        classes += config.headline ? 'text--headline ' : '';
        classes += config.center ? 'text--center ' : '';
        classes += config.semiBig ? 'text--semi-big ' : '';

        return (
            <div className={'text ' + classes}>
                {this.props.children}
            </div>
        );
    }
}