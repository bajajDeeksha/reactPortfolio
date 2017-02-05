import React, { Component } from 'react';
import ProfileDetailElement from './helpers/profile-details';
import SectionHeader from './helpers/section-header';
import dbimg from '../img/db.png';

class Profile extends Component {
    render() {
        return (
            <section id="page-top">
                <div className="container">
                    <div className="row">
                        <SectionHeader headerName="Profile" headerQuote="I work to make Internet look Magnificent !!" />
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <h4>Details</h4>
                            <p>
                                <ProfileDetailElement detaillName="Name" detailValue="Deeksha Bajaj" />
                                <ProfileDetailElement detaillName="Age" detailValue="23 Years" />
                                <ProfileDetailElement detaillName="Location" detailValue="Tokyo, Japan" />
                                <ProfileDetailElement detaillName="Nationality" detailValue="Indian" />
                                <ProfileDetailElement detaillName="Hobbies" detailValue="Reading Books, Painting, Listening to Music, Traveling, Snowboarding" />
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img className="img-responsive" src={dbimg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Profile;