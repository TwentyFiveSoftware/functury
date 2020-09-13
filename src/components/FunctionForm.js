import React from 'react';
import InputField from './InputField';

const FunctionForm = ({
                          title = '',
                          lockId = false,
                          initialValues = {
                              id: '',
                              name: '',
                              formula: '',
                              desmosFormula: '',
                              desmosSlider: '',
                              icon: ''
                          },
                          onChange
                      }) => {
    return (
        <div className={'new-function-form'}>
            <div className={'new-function-form__title'}>{title}</div>

            <InputField name={'ID'}
                        description={'Die einzigartige ID der Funktion. Sie bestimmt den Pfad, unter der die Funktion erreichbar ist, ' +
                        'also https://functury.web.app/functions/<ID>.'}
                        placeholder={'z.B.: "linear-function", "quadratic-function"'}
                        onChange={v => onChange({id: v})}
                        disabled={lockId}
                        initialValue={initialValues.id}
            />

            <InputField name={'Name'}
                        description={'Der Name der Funktion / der Funktionsart.'}
                        placeholder={'z.B.: "Lineare Funktionen", "Quadratische Funktionen"'}
                        onChange={v => onChange({name: v})}
                        initialValue={initialValues.name}
            />

            <InputField name={'Formel'}
                        description={'Die allgemeine Formel der Funktion in LATEX-Schreibweise.'}
                        placeholder={'z.B.: "y=mx+t", "y=a(x-b)^2+c", "y=\\frac{a}{x+b}+c"'}
                        latex={true}
                        onChange={v => onChange({formula: v})}
                        initialValue={initialValues.formula}
            />

            <InputField name={'Desmos - Formel'}
                        description={'Die Formel für die Funktion, die in Desmos dargestellt wird (LATEX-Schreibweise).'}
                        placeholder={'z.B.: "y=mx+t", "y=a(x-b)^2+c", "y=\\frac{a}{x+b}+c"'}
                        onChange={v => onChange({desmosFormula: v})}
                        initialValue={initialValues.desmosFormula}
            />

            <InputField name={'Desmos - Schieberegler'}
                        description={'Die Schieberegler, die in Desmos dargestellt werden. Die einzelnen Scheiebregler durch Strichpunkte ";" trennen.'}
                        placeholder={'z.B.: "m=-2.5", "a=-2.5;b=1;c=-2"'}
                        onChange={v => onChange({desmosSlider: v})}
                        initialValue={initialValues.desmosSlider}
            />

            <InputField name={'Icon'}
                        description={'Eine URL zum Icon der Funktion, das auf der Übersichtsseite angezeigt wird.'}
                        placeholder={'https://...'}
                        onChange={v => onChange({icon: v})}
                        initialValue={initialValues.icon}
            />

        </div>
    );
};

export default FunctionForm;
