import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MainPage extends Component {
    render() {
        return (
            <div className={'main-page'}>
                {(this.props.functions.map((f, index) => (
                    <Link className='function-container' key={index} to={`function/${f.id}`}>
                        <img src={f.icon} alt={''}/>
                        <div className='function-container__info'>
                            <div className='function-container__name'>{f.name}</div>
                            <div className='function-container__formula'>{f.formula}</div>
                        </div>
                    </Link>
                )))}
            </div>
        );
    }
}
