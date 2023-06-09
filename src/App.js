import logo from './logo.png';
import logoolsztyn from './sponsors/logoolsztyn.jpg';
import logopholsztyn from './sponsors/logopholsztyn.jpg';
import logopomost from './sponsors/logopomost.jpg';
import logosantander from './sponsors/logosantander.png';
import logowowka from './sponsors/logowowka.jpg';
import logomu from './sponsors/logomu.jpg';
import './App.css';



function Invitation() {
  return (
      <>
      <img src={logo} className="App-logo" alt="logo" />
       {/*
      <h1>Jak za dawnych lat</h1>
      <h2>I Konkurs Piosenki Polskiej</h2>
     
      <br></br>
      <p>
        I Konkurs Piosenki Polskiej skierowany jest do solistów - uczestników Środowiskowych Domów Samopomocy z całej Polski.
      </p>
      <br></br>      
      
      <p>Chcesz być na bieżąco? Odwiedź nasz profil na Facebooku!</p><br></br>
     
      <h2>FINAŁ</h2>
       */}
      
      </>
  );
}

function Sponsors() {
  return (
    <>
<div>
        <img src={logoolsztyn} className="sponsors" alt="logoolsztyn" />
        <img src={logopholsztyn} className="sponsors" alt="logopholsztyn" />
        <img src={logosantander} className="sponsors" alt="logosantander" />
        <img src={logopomost} className="sponsors" alt="logopomost" />
        <img src={logowowka} className="sponsors" alt="logowowka" />
        <img src={logomu} className="sponsors" alt="logomu" />
        
        </div>
    </>
  )
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
        {/*
        <nav className='nav'>
        <Button href='https://drive.google.com/file/d/1kAeOEVDHBOCH0yAkZ7CZ1TNoBdVijXsv/view?usp=sharing' variant="outlined">Regulamin</Button> 
        <Button href='https://www.facebook.com/konkurspiosenkipolskiej/' variant="contained">Facebook</Button>
        </nav>
        */}
        <Sponsors/>
    <footer><br></br><br></br>
    {/*<p> - Copyright - 2023 - </p>*/}
    <h3>Powered by Łukasz Młynarczyk</h3>
    </footer>
    
    </div>
  );
}

export default App;
