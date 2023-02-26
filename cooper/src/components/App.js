import logo from '../images/brand/cooper.png';
import '../styles/components/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content"></div>
    </div>
  );
}

export default App;
