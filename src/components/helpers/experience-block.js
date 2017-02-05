import React, { Component } from 'react';
import Modal from './modal';

export default class ExperienceBlock extends Component {
    render() {
        console.log(this.props.blockObj);
        return (
            <div>
                <div className="col-sm-4 portfolio-item">
                    <a href={`#${this.props.blockObj.modalLink}`} className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <p><span className="strong-text">{this.props.blockObj.name}</span><br />
                                    Tags : {this.props.blockObj.tags}</p>
                            </div>
                        </div>
                        <img src={this.props.blockObj.img} className="img-responsive" alt="" />
                    </a>
                </div>
                <Modal modalLink={this.props.blockObj.modalLink} dataObj={this.props.blockObj.modalObj} />
            </div>
        );
    }
}
