import logo from './logo.png';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className='app'>
    <div className="context">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jak za dawnych lat</h1>
        <h2>I Przegląd Polskiej Piosenki</h2>
        <br></br>
        <p>
          I Przegląd Polskiej Piosenki to konkurs wokalny, dla solistów - uczestników Środowiskowych Domów Samopomocy z całej Polski.
        </p>
        <p>Jesteś zainteresowany?</p>
        <br></br>
        <Button variant="contained">Zapisz się!</Button>
        
        </div>
  

      <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

            </ul>


        </div>
        <nav className='nav'>
        <Button variant="outlined">Regulamin</Button>
        <Button variant="outlined">Facebook</Button>
        </nav>
    <footer>
    <p>Copyright @ 2023</p>
    </footer>
    </div>
  );
}

export default App;
