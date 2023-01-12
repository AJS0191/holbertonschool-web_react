import logo from './logo.svg';
import './App.css';
import year from './utils'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>{year} </p>
      </footer>
    </div>
  );
}

export default App;
