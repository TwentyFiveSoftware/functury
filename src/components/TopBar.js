import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV, faHome} from '@fortawesome/free-solid-svg-icons';
// import Dropdown from './Dropdown';

export default class TopBar extends Component {
    render() {
        let navItems = [
            {tab: '1', text: 'Graph'},
            {tab: '2', text: 'Besonderheiten'},
            {tab: '3', text: 'Berechnungen'},
            {tab: '4', text: 'Übungen'},
        ];

        if (this.props.page === 'function')
            return (
                <div className='top-bar top-bar--function-page'>
                    <Link to='/' className='top-bar__link'><FontAwesomeIcon icon={faHome}/></Link>
                    <div className='top-bar__title top-bar__title--center'>{this.props.func.name}</div>

                    <div className='nav'>
                        {navItems.map((item, i) => (
                            <Link
                                to={`/function/${this.props.func.id}/${item.tab}`}
                                className={(this.props.tab === item.tab ? 'nav__item nav__item--selected' : 'nav__item')}
                                key={i}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
            );

        else
            return (
                <div className='top-bar'>
                    <div className='top-bar__title'>Funktionen</div>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                    {/*<Dropdown/>*/}
                </div>
            );
    }
}
