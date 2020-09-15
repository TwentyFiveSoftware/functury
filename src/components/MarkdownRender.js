import React from 'react';
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import emoji from 'emoji-dictionary';

export default function MarkdownRender(props) {
    const newProps = {
        ...props,
        plugins: [
            RemarkMathPlugin,
        ],
        source: props.source.replace(/:\w+:/gi, name => emoji.getUnicode(name)),
        renderers: {
            ...props.renderers,
            math: (props) =>
                <MathJax.Node formula={props.value}/>,
            inlineMath: (props) =>
                <MathJax.Node inline formula={props.value}/>
        }
    };


    return (
        <MathJax.Provider input={'tex'}>
            <ReactMarkdown {...newProps} />
        </MathJax.Provider>
    );
}
