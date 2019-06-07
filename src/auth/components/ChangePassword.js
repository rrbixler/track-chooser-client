import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { changePassword } from '../api'
import messages from '../messages'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert(messages.changePasswordSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(() => {
        this.setState({ oldPassword: '', newPassword: '' })
        alert(messages.changePasswordFailure, 'danger')
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <Fragment>
        <Form className='auth-form' onSubmit={this.onChangePassword}>
          <h3 className="white">Change Password</h3>
          <Form.Group controlId="oldPassword">
            <Form.Label className="white">Old Password</Form.Label>
            <Form.Control className="rounded-0"
              type="password"
              placeholder="Old Password"
              required
              name="oldPassword"
              value={oldPassword}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label className="white">New Password</Form.Label>
            <Form.Control className="rounded-0"
              type="password"
              placeholder="New Password"
              required
              name="newPassword"
              value={newPassword}
              onChange={this.handleChange}
            />
            <Button variant="success" type='submit' className="rounded-0">Change Password</Button>
            <Link to='/'><Button variant="warning" type='submit' className="rounded-0">Cancel</Button></Link>
          </Form.Group>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(ChangePassword)
