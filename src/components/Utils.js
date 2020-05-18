import React from 'react';

export function EmptySpace() {
    return <div className={'empty-space'}/>;
}

export function EmptySpaceSmall() {
    return <div className={'empty-space empty-space--small'}/>;
}

export function InlineSpace({small}) {
    return <div className={'inline-space ' + (small === undefined || !small ? '' : 'inline-space--small')}/>;
}

export function Panel({largePadding, largePaddingHorizontal, children}) {
    return (
        <div className={'panel ' + (!largePaddingHorizontal ? '' : 'panel--large-padding-horizontal ') + (!largePadding ? '' : 'panel--large-padding')}>
            {children}
        </div>
    );
}

export function Button({title, click}) {
    return <div className={'button'} onClick={() => click()}>{title}</div>;
}

export function Solution({open, children}) {
    return <div className={'solution ' + (open ? 'solution--open' : '')}>{children}</div>;
}

export function H({children}) {
    return <b className='text--highlighted'>{children}</b>;
}

export function Sqrt({children}) {
    return <span className='sqrt'>{children}</span>;
}
