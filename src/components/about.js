import React, { Component } from 'react';
import SectionHeader from './helpers/section-header';

class About extends Component {
    render() {
        return (
            <section id="aboutme">
                <div className="container">
                    <div className="row">
                        <SectionHeader headerName="About ME" headerQuote="Quality means doing it right even when no one is looking" headerQuoteBy="Henry Ford"/>
                    </div>
                    <div className="row text-center">
                        <p> I am a web-developer, currently working in Tokyo, Japan.</p>
                        <p> I am confident, highly motivated, with good knowledge of front-end techniques.</p>     
                        <p> I am organized and detail-oriented. I stand by quality and believe in giving my 100% to whatever work I do.</p>
                        <p> I also enjoy working in teams, because one can learn faster and more with others. As the saying go "Alone we can do so little, together we can do so much."</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;