import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state= {
            pageData: []
        };
    }

    componentDidMount(){
        axios.get('http://wordpress.utechna.lt/wp-json/wp/v2/pages')
            .then(res => {
                this.setState({pageData: res.data})
            });
            console.log(this.state.pageData)
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {this.data}
        </p>
      </div>
    );
  }
}

export default App;
