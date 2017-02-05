import React, { Component } from 'react';
import Headbar from './components/headbar';
import Profile from './components/profile';
import About from './components/about';
import Experience from './components/experience';
import Abilities from './components/abilities';
import Education from './components/education';
import Contact from './components/contact';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import Scroll from './components/scroll';

export default class App extends Component {
    render() {
        return (
            <div>
                <Headbar />
                <Profile />
                <About />
                <Experience />
                <Abilities />
                <Education />
                <Contact />
                <Testimonials />
                <Footer />
                <Scroll />
            </div>
        );
    }
}