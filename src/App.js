import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


const backgroundUrlImage = 'https://i.redd.it/x86cg7onkyua1.jpg';
document.body.style.backgroundImage = `url(${backgroundUrlImage})`;
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundPosition = 'center';


const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: "10px"
}

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
            <Routes>
                <Route
                    path='/'
                    element={<Cards characters={characters}
                        onClose={onClose} />}
                >
                </Route>
                <Route
                    path='/about'
                    element={<About />}
                >
                </Route>
                <Route
                    path='/detail/:id'
                    element={<Detail />}
                >
                </Route>
            </Routes>
        </div>
    );

}

export default App;
