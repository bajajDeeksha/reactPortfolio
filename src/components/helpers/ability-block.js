import React, { Component } from 'react';
import AbilityBlockItem from './ability-block-item';

export default class AbilityBlock extends Component {
    render() {
        return (
            <div className="col-sm-12 text-center">
                <h4>{this.props.abilityName}</h4>
                {this.renderAbilityItems()}
            </div>
        );
    }
    renderAbilityItems() {
        const len = this.props.jsonArr.length;
        const firstIndexStart = 0;
        const firstIndexEnd = Math.floor((len + 1) / 2);
        const secondIndexStart = firstIndexEnd;
        const secondIndexEnd = len;
        return (
            <div>
                <div className="col-sm-6">
                    {this.renderColumnItems(firstIndexStart,firstIndexEnd)}
                </div>
                <div className="col-sm-6">
                    {this.renderColumnItems(secondIndexStart,secondIndexEnd)}
                </div>
            </div>
        );
    }
    renderColumnItems(startIndex, endIndex) {
        const elementArr = [];
        for(let i = startIndex; i < endIndex; i++){
            elementArr.push(<AbilityBlockItem blockObj={this.props.jsonArr[i]} key={`${this.props.abilityName}_${i}`} />)
        }
        return elementArr;
    }
}