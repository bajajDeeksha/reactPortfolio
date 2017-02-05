import React, { Component } from 'react';
import ModalItem from './modal-item';

export default class Modal extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id={this.props.modalLink} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    <h2>{this.props.dataObj.modalName}</h2>
                                    <hr className="line-seprator" />
                                    <p>{this.props.dataObj.for}</p>
                                    {this.renderModalItem()}
                                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderModalItem() {
        const items = this.props.dataObj.blocks;
        const elementArr = [];
        items.forEach((val, key) => {
            elementArr.push(<ModalItem dataObj={val} key={`modalitem_${key}`} />);
        })
        return elementArr;
    }
}