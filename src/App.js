import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            pageData: []
        };
    }

    componentDidMount() {
        axios.get('http://wordpress.utechna.lt/wp-json/wp/v2/pages')
            .then(res => {
                this.setState({pageData: res.data})
                //console.log(res.data[4].content.rendered)
            });

    }


    render() {
        let text;
        if (this.state.pageData.length > 0) {
            //console.log(this.state.pageData[4].content.rendered);
            text = this.state.pageData[4].content.rendered;
        }


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    {text}
                </p>
            </div>
        );
    }
}

export default App;
