import React, { Component } from 'react';
import SectionHeader from './helpers/section-header';
import ContactIcon from './helpers/contact-icon';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <SectionHeader headerName="Contact" headerQuote="Coming together is a beginning; keeping together is progress; working together is a success;" headerQuoteBy="Henry Ford"/>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p> Thank You for visiting My page :) </p>
                        </div>
                        <div className="col-lg-6 text-center">
                            <h3> Got a project you would like me to work for, here is my resume for your kind consideration. Please have a look.</h3>
                            <a href="./pdfile/Deeksh_resume.pdf" target="_blank" className="btn-resume btn-outline">resume</a>
                        </div>
                        <div className="col-lg-6 text-center">
                            <h3> Or how about just a friendly chat, you can find me here...</h3>
                            <ul className="list-inline">
                                <ContactIcon hrefProp="https://jp.linkedin.com/in/deeksha-bajaj-42962a23"  iconType="linkedin" />
                                <ContactIcon hrefProp="mailto:dishab16@gmail.com"  iconType="envelope" />
                                <ContactIcon hrefProp="https://plus.google.com/117264982600609628975/posts"  iconType="google-plus" />
                                <ContactIcon hrefProp="https://www.facebook.com/dishab16"  iconType="facebook" />
                                <ContactIcon hrefProp="https://github.com/bajajDeeksha"  iconType="github" />
                            </ul>
                        </div>
                    </div>
                    <hr className="line-seprator" style={{"marginTop" : "100px"}} />
                </div>
            </section>
        );
    }
}

export default Contact;