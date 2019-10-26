import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import nav from './nav';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Kayhan'
    };
  }
  render() {
    return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt="kayhan"
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' React Bootstrap'}
    </Navbar.Brand>
  </Navbar> );
  }

  render() {
    return (
        <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
