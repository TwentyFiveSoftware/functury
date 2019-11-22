import React from 'react';

export default function Fraction({top, bottom, margin}) {
    return (
        <div className={'fraction ' + (!margin ? '' : 'fraction--margin')}>
            <div className={'fraction__top'}>{top}</div>
            <div className={'fraction__bottom'}>{bottom}</div>
        </div>
    );
}
