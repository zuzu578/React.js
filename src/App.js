import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component{
  render(){
    return(
      <div class="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
          Hello React!!

          </p>
          <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn react
          </a>


        </header>


      </div>
    )
  }
}
export default App;
