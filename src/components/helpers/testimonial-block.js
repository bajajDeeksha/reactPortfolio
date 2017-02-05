import React, { Component } from 'react';

export default class TestimonialBlock extends Component {
    render() {
        return (
            <div className={`item ${this.props.active ? 'active' : ''}`}>
                <div className="carousel-caption">
                    <div className="row">
                        <div className="col-lg-4">
                            <img className="client-img" src={this.props.blockObj.img} alt="Testimonial"/>
                        </div>
                        <div className="col-lg-8 testi-content">
                            <p>"{this.props.blockObj.content}"</p>
                            <h3><span className="strong-text">- {this.props.blockObj.name}</span>, {this.props.blockObj.position}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}