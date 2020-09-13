import React, {useState} from 'react';
import MarkdownRender from './MarkdownRender';

const InputField = ({name = '', description = '', placeholder = '', latex = false, initialValue = '', disabled = false, onChange}) => {
    const [value, setValue] = useState(initialValue);

    const change = e => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    if (latex)
        return (
            <div className={'input-field input-field--latex'}>
                <div className={'input-field__left'}>
                    <div className={'input-field__name'}>{name}</div>
                    <div className={'input-field__description'}>{description}</div>
                    <input className={'input-field__input'} placeholder={placeholder} value={value} onChange={change} disabled={disabled}/>
                </div>
                <div className={'input-field__right'}>
                    <div className={'input-field__preview-title'}>Vorschau:</div>
                    <div className={'input-field__preview-output'}>
                        <MarkdownRender source={(value.length > 0 && value !== '\\') ? `$${value}$` : '--'}/>
                    </div>
                </div>
            </div>
        );
    return (
        <div className={'input-field'}>
            <div className={'input-field__name'}>{name}</div>
            <div className={'input-field__description'}>{description}</div>
            <input className={'input-field__input'} placeholder={placeholder} value={value} onChange={change} disabled={disabled}/>
        </div>
    );
};

export default InputField;
