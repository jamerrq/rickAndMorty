import { useState } from "react"
import { NavLink } from "react-router-dom"

import './SearchBar.css'


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
        <div className="container">
            <input
                type='search'
                className="searchBar"
                value={id}
                onChange={handleChange}
                placeholder="min: 1, max: 826"
            />
            <button
                onClick={myOwnSearch}
                className="aggButton"
            >
                AGREGAR
            </button>
            <button
                onClick={randomSearch}
                className="aggButton"
            >
                🎲
            </button>
            <button
                className="aggButton"
                onClick={props.clearAllFunction}
            >
                🗑
            </button>

            <button
                className="aggButton"
                onClick={props.loadDefaultFn}
            >
                🍁
            </button>
            <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <NavLink to="/home">
                <button className="aggButton">🏠</button>
            </NavLink>
            <NavLink to="/about">
                <button className="aggButton">ABOUT ME 🐧</button>
            </NavLink>
            <button className="aggButton"
                onClick={props.logOutFunction}>LOG OUT 🚪</button>
        </div>
    );

}
