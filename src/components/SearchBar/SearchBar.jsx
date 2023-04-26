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
                title="Add character"
            >
                <i class='fas fa-plus'></i>
            </button>
            <span>&emsp;&emsp;</span>
            <button
                onClick={randomSearch}
                className="aggButton"
            >
                <i class='fas fa-dice-five'></i>
            </button>
            <button
                className="aggButton"
                onClick={props.clearAllFunction}
            >
                <i class='fas fa-trash'></i>
            </button>

            <button
                className="aggButton"
                onClick={props.loadDefaultFn}
                title="Add random character"
            >
                🌈
            </button>
            <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <NavLink to="/home">
                <button className="aggButton navBar"><i class='fas fa-home	'></i></button>
            </NavLink>
            <NavLink to="/about">
                <button className="aggButton navBar">ABOUT ME</button>
            </NavLink>
            <button className="aggButton navBar"
                onClick={props.logOutFunction}> LOG OUT <i class='fas fa-door-open'></i></button>
        </div>
    );

}
