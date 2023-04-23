import './App.css';

import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


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
    const location = useLocation();
    const [access, setAccess] = useState(false);
    const email = "jamerrq@gmail.com", password = "henry123";
    const navigate = useNavigate();

    function login(userData) {
        if (userData.email === email && userData.password == password) {
            setAccess(true);
            navigate("/home");
        }
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access]);

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

    function logOut() {
        console.log("IN");
        setAccess(false);
        navigate("/");
    }

    return (
        <div className='App' style={appStyle}>
            {!(location.pathname === "/") && <Nav onSearch={onSearch}
                logOutFunction={logOut} />}
            <Routes>
                <Route
                    path="/"
                    element={<Form loginFunction={login} />}
                >
                </Route>
                <Route
                    path='/home'
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
