import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import TopBar from '../components/TopBar';

export default class FrontPage extends Component {
    render() {
        return (
            <div className='page'>
                <TopBar page='front'/>
                <div className='content'>
                    {(this.props.functions.map((f, index) => (
                        <Link className='function-container' key={index} to={`/function/${f.id}`}>
                            <div className='function-container__left'>
                                <div className='function-container__name'>{f.name}</div>
                                <div className='function-container__formula'>{f.formula}</div>
                            </div>
                            {f.svg}
                        </Link>
                    )))}
                </div>
            </div>
        );
    }
}
