import React, { Component } from 'react';
import AbilityStars from './ability-stars'

export default class AbilityBlockItem extends Component {
    render() {
        return (
            <div className="col-xs-12 highlight">
                <div className="col-xs-6"><p>{this.props.blockObj.name}</p></div>
                <div className="col-xs-6"><AbilityStars rating={this.props.blockObj.rank} numStars="5" /></div>
            </div>
        );
    }
}