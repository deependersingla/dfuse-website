import logo from './logo.svg';
import dfuse_1 from './Assets/dfuse_logo_horizontal.svg'
import dfuse_2 from './Assets/dfuse_logo_vertical.svg'
import './App.css';

function A() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={dfuse_1} className="App-logo" alt="logo" /> */}
        {/* <img src={dfuse_2} className="App-logo" alt="logo" /> */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default A;
