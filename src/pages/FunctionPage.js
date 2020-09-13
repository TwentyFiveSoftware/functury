import React, {Component} from 'react';
import Desmos from 'desmos';
import MarkdownRender from '../components/MarkdownRender';
import Header from '../components/Header';
import {Redirect} from 'react-router-dom';
import firebase from '../firebase/firebase';

export default class FunctionPage extends Component {
    state = {
        name: '',
        content: '',
        redirect: false,
        headlines: []
    }

    componentDidMount() {
        const load = async () => {
            const doc = await firebase.firestore().collection('content').doc(this.props.match.params.id).get();

            if (!doc.exists) {
                this.setState({redirect: true});
                return;
            }

            const {name, desmos, content} = doc.data();
            this.setState({name, content: content.replace(/\n/g, '\n\n')});

            // DESMOS
            const desmosElement = document.querySelector('.desmos');
            const calculator = Desmos.GraphingCalculator(desmosElement,
                {keypad: false, settingsMenu: false, expressionsTopbar: false, border: true, images: false, folders: false, notes: false, links: false});
            calculator.setExpression({latex: desmos.formula, color: '#96C178'});

            for (let slider of desmos.slider)
                calculator.setExpression({latex: slider});
        }

        load();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.headlines.length > 0) return;

        const contentElement = document.querySelector('.content');

        if (contentElement === null)
            return;

        const headlines = contentElement.querySelectorAll('h2');

        if (headlines.length > 0)
            this.setState({headlines: [...headlines]});
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={'/'}/>;

        return (
            <div className={'page'}>
                <Header/>

                <div className={'content'}>
                    <h1 className={'title'}>{this.state.name}</h1>

                    <div className={'desmos'}/>

                    <div className={'navigation'}>
                        <div className={'navigation__title'}>INHALT</div>
                        {this.state.headlines.map((link, index) =>
                            <div key={index} className={'navigation-item'} onClick={() => window.scrollTo(0, link.getBoundingClientRect().top)}>
                                {link.textContent}
                            </div>
                        )}
                    </div>

                    <MarkdownRender source={this.state.content}/>
                </div>

                <div className={'sidebar'}>
                    <div className={'sidebar__title'}>INHALT</div>
                    {this.state.headlines.map((link, index) =>
                        <div key={index} className={'navigation-item'} onClick={() => window.scrollTo(0, link.getBoundingClientRect().top)}>
                            {link.textContent}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
