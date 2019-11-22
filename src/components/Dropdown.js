// import React, {Component} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
//
// export default class Dropdown extends Component {
//     state = {
//         open: false,
//         selectedIndex: 0
//     };
//
//     render() {
//         let options = [
//             {title: '8. Klasse', grade: 8},
//             {title: '9. Klasse', grade: 9},
//             {title: '10. Klasse', grade: 10},
//         ];
//
//         return (
//             <div className={'dropdown'}>
//                 <div className="dropdown__selected" onClick={() => this.setState({open: !this.state.open})}>
//                     <div className="dropdown__selected-left">{options[this.state.selectedIndex].title}</div>
//                     <div className="dropdown__selected-right"><FontAwesomeIcon icon={faAngleDown}/></div>
//                 </div>
//
//                 <div className={'dropdown__options ' + (this.state.open ? 'dropdown__options--show' : '')}>
//                     {options.map((option, index) => <div className="dropdown__option" key={index} onClick={() => this.setState({open: false, selectedIndex: index})}>{option.title}</div>)}
//                 </div>
//             </div>
//         );
//     }
// }