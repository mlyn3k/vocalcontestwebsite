import logo from './logo.png';
import './App.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Invitation() {
  return (
      <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Jak za dawnych lat</h1>
      <h2>I Przegląd Polskiej Piosenki</h2>
      <br></br>
      <p>
        I Przegląd Polskiej Piosenki to konkurs wokalny, dla solistów - uczestników Środowiskowych Domów Samopomocy z całej Polski.
      </p>
      <p>Jesteś zainteresowany?</p> 
      <br></br>      
      <Button href='https://forms.gle/jnBHqZi1ob7xmqZn9' variant="contained">Zapisz się!</Button>
      <br></br><br></br>
      <p>Zgłoszenia przyjmujemy do 11 czerwca 2023!</p>
      </>
  );
}


function App() {
  return (
    <div className='app'>
    <div className="context">
        <Invitation/>
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
        <Button href='https://drive.google.com/file/d/1kAeOEVDHBOCH0yAkZ7CZ1TNoBdVijXsv/view?usp=sharing' variant="outlined">Regulamin</Button> 
        <Button href='https://www.facebook.com/konkurspiosenkipolskiej/' variant="contained">Facebook</Button>
        </nav>
    <footer>
    <p>Copyright @ 2023</p>
    </footer>
    </div>
  );
}

export default App;
