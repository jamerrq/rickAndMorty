import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const dataStyle = {
    width: "50%",
    color: "white"
}
const picStyle = {
    width: "50%",
}

const detailStyle = {
    display: "flex",
    flexDirection: "row",
    marginTop: "30px"
}

const aStyle = {
    margin: "2px"
}

function imgStyle(gender) {
    // console.log(gender);
    const imgStyle = {
        borderRadius: "50%",
    }
    if (gender === "App Creator") {
        imgStyle["border"] = "8px solid #95CD41";
    }
    return imgStyle;
}


function Detail() {

    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const imageUrl = 'https://i.pinimg.com/564x/05/c8/38/' +
        '05c838a98bfd219042d475d3c6021639.jpg';

    useEffect(() => {
        if (id === "0") {
            let data = {
                name: "Jamer José",
                status: "Alive",
                species: "Human",
                gender: "App Creator",
                origin: { name: "Earth" },
                image: imageUrl,
                id: 0,
                links: [
                    ["GitHub", "https://github.com/jamerrq"],
                    ["Lichess", "https://lichess.org/@/jamerrq"],
                    ["Linkedin", "https://linkedin.com/in/jamerrq"]
                ]
            };
            setCharacter(data);
        } else {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
        }
        return; //setCharacter({});
    }, [id, imageUrl]);

    const myImgStyle = imgStyle(character.gender);
    const programUrl = 'https://www.eafit.edu.co/programas-academicos/' +
        'pregrados/ingenieria-matematica/Paginas/inicio.aspx';

    return (
        <div style={detailStyle}>
            <div style={dataStyle}>
                <h1>
                    {character?.name ?
                        character.name : "No information loaded yet!"}
                </h1>
                <h2>
                    {character?.status ?
                        "Status | " + character.status :
                        "No information loaded yet!"}
                </h2>
                <h2>
                    {character?.species ?
                        "Species | " + character.species :
                        "No information loaded yet!"}
                </h2>
                <h2>
                    {character?.gender ?
                        "Gender | " + character.gender :
                        "No information loaded yet!"}
                </h2>
                <h2>
                    {character?.origin?.name ?
                        "Origin | " + character.origin.name :
                        "No information loaded yet!"}
                </h2>
                <h3>
                    {character?.links ?
                        <>
                            <h2 style={{ color: "#F6D860" }}>LINKS</h2>
                            {character.links.map(link =>
                            (<a style={aStyle}
                                href={link[1]}>{link[0]}</a>))}
                            <h2 style={{ fontStyle: "italic" }}> Sobre mí: </h2>
                            <h3 style={{ fontStyle: "italic" }}> Hola, mi
                                nombre es Jamer José, soy
                                <a href={programUrl}> Ingeniero
                                    Matemático</a>  de la universidad EAFIT.
                                Me gusta mucho la programación,
                                el ajedrez y los gatos.</h3>
                        </>
                        : null}
                </h3>
            </div>
            <div style={picStyle}>
                <img
                    style={myImgStyle}
                    src={character.image}
                    alt=""
                />
            </div>
        </div >
    );

}


export default Detail;
