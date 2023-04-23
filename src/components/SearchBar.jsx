import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"


const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const searchStyle = {
    border: "1px solid grey",
    borderRadius: "5px",
    height: "30px",
    width: "30%",
    padding: "0px 20px 0px 20px",
    outline: "0",
    backgroundColor: "#f5f5f5",
    fontSize: "15px",
    marginRight: "2px"
}

const aggButtonStyle = {
    border: "1px solid grey",
    height: "30px",
    borderRadius: "5px",
    margin: "2px",
    fontFamily: "'Fira Sans'"
}

export default function SearchBar(props) {
    const [id, setId] = useState("");
    const handleChange = (e) => {
        const newValue = e.target.value;
        setId(newValue);
    }
    const myOwnSearch = function () {
        props.onSearch(id);
    }
    const randomSearch = function () {
        const max = 826;
        const char = Math.floor(Math.random() * max);
        props.onSearch(char);
    }
    return (
        <div style={containerStyle}>
            <input
                type='search'
                style={searchStyle}
                value={id}
                onChange={handleChange}
            />
            <button onClick={myOwnSearch} style={aggButtonStyle}>
                AGREGAR
            </button>
            <button onClick={randomSearch} style={aggButtonStyle}>
                🎲
            </button>
            <button style={aggButtonStyle}>🗑</button>
            <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <NavLink to="/home">
                <button style={aggButtonStyle}>HOME 🏘</button>
            </NavLink>
            <NavLink to="/about">
                <button style={aggButtonStyle}>ABOUT ME 🐧</button>
            </NavLink>
            <button style={aggButtonStyle}
                onClick={props.logOutFunction}>LOG OUT 🚪</button>
        </div>
    );
}
