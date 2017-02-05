import React, { Component } from 'react';
import NavbarButton from './helpers/navbar-button';

class Headbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#page-top">Deeksha Bajaj</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <NavbarButton hrefProp='#page-top' classProp="hidden" />
                            <NavbarButton hrefProp='#aboutme' textProp='About Me' />
                            <NavbarButton hrefProp='#portfolio' textProp='Experience' />
                            <NavbarButton hrefProp='#abilites' textProp='Abilities' />
                            <NavbarButton hrefProp='#education' textProp='Education' />
                            <NavbarButton hrefProp='#contact' textProp='Contact' />
                            <NavbarButton hrefProp='#testimonials' textProp='Testimonials' />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Headbar;