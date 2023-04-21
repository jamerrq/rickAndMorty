import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import { useState } from 'react';


const backgroundUrlImage = 'https://i.redd.it/x86cg7onkyua1.jpg';
document.body.style.backgroundImage = `url(${backgroundUrlImage})`;
document.body.style.backgroundAttachment = 'fixed';


const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: "10px"
}

const example = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {

    const [characters, setCharacters] = useState([]);

    function onSearch(id) {
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        axios(url).then(({ data }) => {
            if (data.name) {
                let isRepeated = characters.reduce((acc, c) => {
                    return acc || c.id === data.id
                }, false);
                if (isRepeated) {
                    window.alert('¡Este personaje ya está agregado!');
                    return;
                }
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
        });
    }

    function onClose(id) {
        setCharacters((oldChars) => oldChars.filter((c) => c.id !== id));
    }

    return (
        <div className='App' style={appStyle}>
            <Nav onSearch={onSearch} />
            <Cards characters={characters} onClose={onClose} />
        </div>
    );

}

export default App;
