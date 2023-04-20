import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

document.body.style.backgroundImage = `url(https://t4.ftcdn.net/jpg/00/59/95/89/360_F_59958917_1SvEPqvKnrGr68THJ35hqQUiHwQ6WhCN.jpg)`;
document.body.style.backgroundAttachment = 'fixed';

const appStyle = {
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: "10px"
}

function App() {
    return (
        <div className='App' style={appStyle}>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
            <Cards characters={characters} />
        </div>
    );
}

export default App;
