import React, { Component } from 'react';

export default class ModalItem extends Component {
    render() {
        return (
            <div>
                {this.props.dataObj.taskName != null ? <h4>{this.props.dataObj.taskName}</h4> : ""}
                <p><span className="strong-text">Duration :</span> {this.props.dataObj.duration}</p>
                {this.props.dataObj.info != null ? <p>{this.props.dataObj.info}</p> : ""}
                <p><span className="strong-text">Main Responsibility : </span></p>
                <p className="tab">{this.props.dataObj.mainResp}</p>
                <p><span className="strong-text">Technologies :</span> {this.props.dataObj.tech}</p>
                {this.props.dataObj.link && this.props.dataObj.linkText != null ? <p className="ref"><i className="fa fa-link"><a href={this.props.dataObj.link} target="_blank">{this.props.dataObj.linkText} </a></i></p> : <p className="note">The code of this application is strictly copyrighted by the company</p>}
            </div>
        );
    }
}