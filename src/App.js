import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import Footer from './footer/Footer'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Tracks from './routes/Tracks'
import TrackCreate from './routes/TrackCreate'
import Track from './routes/Track'
import TrackEdit from './routes/TrackEdit'
import AutoDismissAlert from './routes/AutoDismissAlert'
// import ReactTransitionGroup from 'react-transition-group/ReactTransitionGroup'
import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      visible: false
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/tracks' render={() => (
            <Tracks alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/track-create' render={() => (
            <TrackCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/tracks/:id' render={({ match }) => (
            <Track match={match} alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/tracks/:id/edit' render={({ match }) => (
            <TrackEdit match={match} alert={this.alert} user={user} />
          )} />
        </main>
        {alerts.map((alert, index) => (
          <AutoDismissAlert key={index} dismissible alert={alert}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </AutoDismissAlert>
        ))}
        <Footer user={user} />
      </React.Fragment>
    )
  }
}

export default App
