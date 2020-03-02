import React from 'react';

export default function Fraction({top, bottom, noMargin}) {
    return (
        <div className={'fraction ' + (!noMargin ? 'fraction--margin' : '')}>
            <div className={'fraction__top'}>{top}</div>
            <div className={'fraction__bottom'}>{bottom}</div>
        </div>
    );
}
