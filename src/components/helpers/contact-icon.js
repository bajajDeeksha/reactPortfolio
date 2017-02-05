import React, { Component } from 'react';

export default class ContactIcon extends Component {
    render() {
        return (
            <li>
                <a href={this.props.hrefProp} target="_blank" className="btn-social btn-outline"><i className={"fa fa-fw fa-" + this.props.iconType}></i></a>
            </li>
        );
    }
}