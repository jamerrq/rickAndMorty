import React from "react";
import { Link } from "react-router-dom";


require('./Card.css');


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.closeCard = this.closeCard.bind(this);
    }

    closeCard() {
        this.props.onClose(this.props.id);
    }

    render() {

        return (
            <div className={`card ${this.props.gender.toLowerCase()}`}>
                <button
                    onClick={this.closeCard}
                    className="closeButton"
                >✖
                </button>
                <Link to={`/detail/${this.props.id}`}>
                    <img
                        src={this.props.image}
                        alt={this.props.name}
                        className="charImg"
                    />
                </Link>

                <h2>Name: {this.props.name}</h2>

                <h2>Status: {this.props.status}</h2>
                <h2>Species: {this.props.species}</h2>
                <h2>Gender: {this.props.gender}</h2>
                <h2>Origin: {this.props.origin}</h2>
            </div>
        );
    }
}

export default Card;
