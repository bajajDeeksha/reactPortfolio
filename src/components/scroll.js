import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        return (
            <div className="scroll-top page-scroll">
                <a className="btn btn-primary" href="#page-top">
                    <i className="fa fa-chevron-up"></i>
                </a>
            </div>
        );
    }
}

export default Scroll;

