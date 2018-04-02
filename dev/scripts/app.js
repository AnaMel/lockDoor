import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SetUp from './setUp';

class App extends React.Component {
    render() {
      return (
          <main>
            <p>Start the session when you are home, and we will remind you to lock the door when you will be leaving!</p>
            <SetUp />
          </main>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
