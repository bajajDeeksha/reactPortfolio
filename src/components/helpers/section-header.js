import React, { Component } from 'react';

export default class SectionHeader extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <h2> {this.props.headerName} </h2>
                <h3>"{this.props.headerQuote}" {this.props.headerQuoteBy != null ? <span><br />-{this.props.headerQuoteBy}</span> : ""}</h3>
                <hr className="line-seprator" />
            </div>
        );
    }
}
