import React, { Component } from 'react';
import SectionHeader from './helpers/section-header';
import ExperienceBlock from './helpers/experience-block';
import ExperienceArr from '../json-data/experience-data';

class Experience extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="container">
                    <div className="row">
                        <SectionHeader headerName="Experience" headerQuote="The only source of knowledge is experience" headerQuoteBy="Albert Einstein"/>
                    </div>
                    <div className="row">
                        {this.renderExperienceBlocks() }
                    </div>
                </div>
            </section>
        );
    }
    renderExperienceBlocks() {
        return ExperienceArr.map((val,key) => {
            return <ExperienceBlock blockObj={val} key={`expBlock_${key}`} />
        })
    }
}

export default Experience;