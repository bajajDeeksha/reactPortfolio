import React, { Component } from 'react';

export default class ProfileDetailElement extends Component {
    render() {
        return (
            <span>
                <span className="strong-text">{this.props.detaillName} : </span> {this.props.detailValue} <br />
            </span>
        );
    }
}
