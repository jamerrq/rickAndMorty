import React from "react";

function style(gender) {
    let bgColor = "#FF6969";
    if (gender == "Male") {
        bgColor = "#A6D0DD";
    } else if (gender != "Female") {
        bgColor = "#FFD3B0";
    }
    return {
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: "15px",
        alignItems: "center",
        marginBottom: "10px",
        borderRadius: "10px",
        padding: "5px",
        fontSize: "11px",
    }
}

const imgStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "5px"
}

const buttonStyle = {
    position: "relative",
    top: "25px",
    left: "55px",
    borderWidth: "1px",
    color: "red",
    borderRadius: "8px",
}

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.closeCard = this.closeCard.bind(this);
    }

    closeCard() {
        this.props.onClose(this.props.id);
    }

    render() {
        const cardStyle = style(this.props.gender);
        return (
            <div style={cardStyle}>
                <button onClick={this.closeCard}
                    style={buttonStyle}>X</button>
                <img src={this.props.image}
                    alt={this.props.name} style={imgStyle} />
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
