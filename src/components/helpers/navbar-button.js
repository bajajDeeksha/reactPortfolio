import React, { Component } from 'react';

export default class NavbarButton extends Component {
    render() {
        return (
            <li className={this.props.classProp != null ? this.props.classProp :"page-scroll"}>
                <a href={this.props.hrefProp} >{this.props.textProp}</a>
            </li>
        );
    }
}
