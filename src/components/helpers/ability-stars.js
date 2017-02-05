import React, { Component } from 'react';

export default class AbilityStars extends Component {
    render() {
        return (
            <span className="stars">
                {this.renderStars()}
            </span>
        );
    }
    renderStars() {
        const rating = Number(this.props.rating);
        const numStars = Number(this.props.numStars);
        const fullStars = Math.floor(rating);
        const halfStar = (rating % 1) !== 0;
        const noStar = Math.floor(numStars - rating);
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i className="fa fa-star" key={`fullStars_${i}`}></i>);
        }
        if (halfStar) {
            stars.push(<i className="fa fa-star-half-empty" key={`halfStar`}></i>);
        }
        for (let i = 0; i < noStar; i++) {
            stars.push(<i className="fa fa-star-o" key={`noStar_${i}`}></i>);
        }
        return stars;
    }
}