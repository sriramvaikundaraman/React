import './App.css';
import Click from './Components/Click';
import Counter from './Components/Counter';
import Greet from './Components/Greet'
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
function App() {
  return (
    <div>
      <header >
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Sriram's first try</h1>
        <Greet name = "Ben-10"></Greet>
        <Welcome></Welcome>
        <Hello employeeName="Sriram"></Hello>
        <Click></Click>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
