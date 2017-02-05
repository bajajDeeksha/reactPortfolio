import React, { Component } from 'react';
import SectionHeader from './helpers/section-header';
import TestimonialBlock from './helpers/testimonial-block';
import TestimonialArr from '../json-data/testimonial-data';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    render() {
        return (
            <section id="refernce">
                <div className="container">
                    <div className="row">
                        <SectionHeader headerName="Testimonials" headerQuote="Nothing influences a person more than a recommendation from a trusted friend, a trusted referral is the holy grail of advertising." headerQuoteBy="Mark Zuckerberg" />
                    </div>
                    <div id="testimonials" className="carouselClient carousel slide">
                        <div className="container">
                            <div className="carousel-inner">
                                {this.renderTestimonialBlocks()}
                            </div>
                            <a className="left carousel-control" href="#testimonials" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#testimonials" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    renderTestimonialBlocks() {
        return TestimonialArr.map((val, key) => {
            const active = key === this.state.index;
            return <TestimonialBlock blockObj={val} key={`testyBlock_${key}`} active={active} />
        })
    }
}

export default Testimonials;