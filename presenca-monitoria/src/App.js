//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="container" action="">
        <h1>Presença da monitoria</h1>
        <div className="divContainer">
          <div className="inputContainer">
            <label>Nome</label>
            <input placeholder="Ex: Gabriel Carvalho"></input>
          </div>
          <div className="inputContainer">
            <label>Matricula</label>
            <input placeholder="Ex: 20191011120005"></input>
          </div>
          <div className="inputContainer">
            <label>Turma</label>
            <input placeholder="Ex: T02"></input>
          </div>
          <div className="inputContainer">
            <button>Enviar</button>
          </div>
        </div>
      




      {/*<
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"
          <p>
            aaaaaaa vo reprova em fmc
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        >*/}
      </form>
    </div>
  );
}

export default App;
