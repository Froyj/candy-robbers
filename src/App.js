import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <WelcomePage />
        <div>
          <Route path="/" exact render={(props) => <WelcomePage /> }/> 
          {/* <Route path="/profile" exact component={Profile}/> 
          <Route path="/candylist" exact component={Candylist} }/> */} */}
        </div>
      </div>
     
  }
}

export default App;
