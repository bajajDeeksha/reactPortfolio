import React, { Component } from 'react';
import SectionHeader from './helpers/section-header';
import EducationBlock from './helpers/education-block';
import EducationArr from '../json-data/education-data';

class Education extends Component {
    render() {
        return (
            <section id="education">
                <div className="container" >
                    <div className="row">
                        <SectionHeader headerName="Education" headerQuote="Education is not learning of facts, but the training of your mind to think" headerQuoteBy="Albert Einstein"/>
                    </div>
                    <div className="row">
                        {this.renderEducationBlocks() }
                    </div>
                </div>
            </section>
        );
    }
    renderEducationBlocks() {
        return EducationArr.map((val,key) => {
            return <EducationBlock blockObj={val} key={`eduBlock_${key}`} />
        })
    }
}

export default Education;