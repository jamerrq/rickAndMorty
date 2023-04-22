import Card from './Card.jsx';
import React from 'react';


const cardsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
}

class Cards extends React.Component {

    render() {
        return (

            <div style={cardsStyle}>
                {this.props.characters.map(element =>
                    <Card
                        id={element.id}
                        key={element.id}
                        name={element.name}
                        status={element.status}
                        species={element.species}
                        gender={element.gender}
                        origin={element.origin.name}
                        image={element.image}
                        onClose={this.props.onClose} />
                )}
            </div>
        )
    }
}

export default Cards;
