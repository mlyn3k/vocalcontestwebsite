import logo from './logo.png';
import './App.css';

function App() {
  return (
    <>
    <div className="context">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jak za dawnych lat</h1>
        <p>
          I Przegląd Polskiej Piosenki
        </p>
        <br></br><br></br>
        <h2>Strona w budowie</h2>
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
    </div >
    <footer>
    <p>Copyright @ 2023</p>
    </footer>
    </>
  );
}

export default App;
