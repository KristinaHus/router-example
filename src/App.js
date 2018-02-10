import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import Home from './Components/Home/Home'
import Contacts from './Components/Contacts/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav>
          <Link to='/contacts/10'
          >Contacts</Link>
        </nav>
        <div className='routes'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contacts/:id' component={Contacts} />
            <Route path='*' render={() => {
              return(
                <Redirect to='/' />
              )}}
              />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
