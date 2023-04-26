import React from "react";
import { Link } from "react-router-dom";


import './Card.css'


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
            <div className="flipCardContainer">
                <div className="flipCardInner">
                    <div className="flipCardFront">

                        <div className={`card ${this.props.gender.toLowerCase()}`}>
                            <button className="idButton">{this.props.id}</button>

                            <img
                                src={this.props.image}
                                alt={this.props.name}
                                className="charImg"
                            ></img>


                            <h2>{this.props.name}</h2>

                        </div>
                    </div>
                    <div className="flipCardBack">
                        <div className={`card back ${this.props.gender.toLowerCase()}`}>
                            <h2>Status: {this.props.status}</h2>
                            <h2>Species: {this.props.species}</h2>
                            <h2>Gender: {this.props.gender}</h2>
                            <h2>Origin: {this.props.origin}</h2>
                            <div className="buttons">
                                <button
                                    onClick={this.closeCard}
                                    className="closeButton"
                                ><i className="fas fa-trash-alt"></i>
                                </button>
                                <button className="closeButton">
                                    <i class='fas fa-star'></i>
                                </button>
                                <Link
                                    to={`/detail/${this.props.id}`}
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    <button
                                        className="closeButton"
                                    ><i class='fas fa-info-circle'></i>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Card;
