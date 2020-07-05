import React from 'react';

export default function Fraction({top, bottom, noMargin, light}) {
    return (
        <div className={'fraction ' + (!noMargin ? 'fraction--margin ' : '')}>
            <div className={'fraction__top ' + (!light ? '' : 'fraction__top--light')}>{top}</div>
            <div className={'fraction__bottom'}>{bottom}</div>
        </div>
    );
}
