import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(() => {
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <Fragment>
        <Form className='auth-form' onSubmit={this.onSignIn}>
          <h3 className="white">Sign In</h3>
          <Form.Group controlId="email">
            <Form.Label className="white">Email address</Form.Label>
            <Form.Control className="rounded-0"
              type="email"
              placeholder="Enter email"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-danger">
            (Dont use your actual email)
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="white">Password</Form.Label>
            <Form.Control className="rounded-0"
              type="password"
              placeholder="Enter password"
              required
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="success" type='submit' className="rounded-0">Sign In</Button>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(SignIn)
