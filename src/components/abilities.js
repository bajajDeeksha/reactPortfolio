import React, { Component } from 'react';
import SectionHeader from './helpers/section-header';
import AbilityBlock from './helpers/ability-block';
import SkillArr from '../json-data/skill-data';
import LanguageArr from '../json-data/language-data';
import ToolsArr from '../json-data/tools-data';

class Abilities extends Component {
    render() {
        return (
            <section id="abilites">
                <div className="container">
                    <div className="row">
                        <SectionHeader headerName="Abilities" headerQuote="The Key to success is the ability to adapt" headerQuoteBy="Unknown" />
                    </div>
                    <div className="row">
                        <AbilityBlock jsonArr={SkillArr} abilityName={'Skills'} />
                        <AbilityBlock jsonArr={LanguageArr} abilityName={'Languages'} />
                        <AbilityBlock jsonArr={ToolsArr} abilityName={'Tools'} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Abilities;