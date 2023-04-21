import { useState } from "react"

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
    margin: "2px"
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
                Agregar
            </button>
            <button onClick={randomSearch} style={aggButtonStyle}>
                Random
            </button>
        </div>
    );
}
