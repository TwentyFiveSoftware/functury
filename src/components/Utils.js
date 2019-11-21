import React from 'react';

export function EmptySpace({small}) {
    return (
        <div className={'empty-space ' + (small === undefined || !small ? '' : 'empty-space--small')}/>
    );
}

export function InlineSpace({small}) {
    return (
        <div className={'inline-space ' + (small === undefined || !small ? '' : 'inline-space--small')}/>
    );
}


export function Panel({largePadding, largePaddingHorizontal, children}) {
    return (
        <div className={'panel ' + (!largePaddingHorizontal ? '' : 'panel--large-padding-horizontal ') + (!largePadding ? '' : 'panel--large-padding')}>
            {children}
        </div>
    );
}