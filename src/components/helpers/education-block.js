import React, { Component } from 'react';

export default class EducationBlock extends Component {
    render() {
        return (
            <div className="col-lg-12" style={{margin : "20px"}}>
                <div className="col-sm-5">
                    <img className="img-responsive" src={this.props.blockObj.img} alt="" />
                </div>
                <div className="col-sm-7">
                    <p><span className="strong-text">{this.props.blockObj.schoolName}</span><br /></p>
                    <p className="tab">
                        {this.props.blockObj.duration}<br/>
                        Course: {this.props.blockObj.course}<br/>
                        Percentage: {this.props.blockObj.percentage}<br/>
                        Place: {this.props.blockObj.place}<br/>
                        <i className="fa fa-link"><a href={this.props.blockObj.website} target="_blank">{this.props.blockObj.website}</a></i>
                    </p>
                </div>
            </div>
        );
    }
}
