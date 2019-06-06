import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <Fragment>
        <Form className='auth-form' onSubmit={this.onSignUp}>
          <h3 className="white">Sign Up</h3>
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
          <Form.Group controlId="passwordConfirmation">
            <Form.Label className="white">Confirm Password</Form.Label>
            <Form.Control className="rounded-0"
              type="password"
              placeholder="Confirm password"
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="success" type='submit' className="rounded-0">Sign In</Button>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(SignUp)
