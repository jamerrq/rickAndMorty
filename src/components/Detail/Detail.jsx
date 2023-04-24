import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


require("./Detail.css")


function imgStyle(gender) {
    const imgStyle = {
        borderRadius: "50%",
        width: "300px",
        height: "300px"
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
                    ["GitHub", "https://github.com/jamerrq",
                        "https://cdn1.iconfinder.com/data/icons" +
                        "/bootstrap-fill-vol-2/16/github-512.png"],
                    ["Lichess", "https://lichess.org/@/jamerrq",
                        "https://static-00.iconduck.com/assets.00/lichess-icon-512x512-q0oh5bwk.png"],
                    ["Linkedin", "https://linkedin.com/in/jamerrq",
                        "https://cdn3.iconfinder.com/data/icons" +
                        "/social-media-black-white-2/512" +
                        "/BW_Linkedin_glyph_svg-512.png"],
                    ["Twitter", "https://twitter.com/jamerrq",
                        "https://cdn3.iconfinder.com/data/" +
                        "icons/picons-social/57/43-twitter-512.png"],
                    ["Codeforces", "https://codeforces.com/profile/jamerrq",
                        "https://static-00.iconduck.com/assets.00/codeforces-icon-512x385-dylx8a2r.png"]
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

        <div className="detail">

            <div className="data">
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

                {
                    character?.links ?
                        <>
                            <h2 style={{ color: "#F6D860" }}>LINKS</h2>
                            <div className="linkContainer">
                                {
                                    character.links.map((link, index) =>
                                    (
                                        <a href={link[1]}>
                                            <div key={index} className="link" >
                                                <img src={link[2]}
                                                    alt=""
                                                    className="favicon"></img>

                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="aboutMeCard">
                                <h2 style={{ fontStyle: "italic", padding: "2%" }}> Sobre mí: </h2>
                                <h3 style={{ fontStyle: "italic", color: "black", padding: "0.9%" }}> Hola, mi
                                    nombre es Jamer José, soy
                                    <a href={programUrl}> Ingeniero
                                        Matemático</a>  de la universidad EAFIT.
                                    Me gusta mucho la programación,
                                    el ajedrez y los gatos.</h3>
                            </div>
                        </>
                        : null
                }

            </div>

            <div className="pic">
                <img
                    style={!(character.id === 0) ? myImgStyle : null}
                    className={(character.id === 0) ? "ownImage" : null}
                    src={character.image}
                    alt=""
                />
            </div>

        </div >

    );

}


export default Detail;
