import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import HomeTeams from './HomeTeams'
import Login from './Login'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }


  render()  {
    return (
      <Router>
        <div className='app'>
        <Route exact path='/' component={Home} />
        <Route exact path='/teams' component={HomeTeams} />
        <Route exact path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}


export default App
