import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Layout from '../shared/Layout'
import TrackFormEdit from '../shared/TrackFormEdit'

import axios from 'axios'
import apiUrl from '../apiConfig'

// import Layout from '../shared/Layout'
// import TrackForm from '../shared/TrackForm'

class TrackEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      track: {
        title: '',
        artist: '',
        date: '',
        duration: '',
        tempo: '',
        keysig: ''
      },
      updated: false
    }
  }

  async componentDidMount () {
    const response = await axios({
      url: `${apiUrl}/tracks/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
    this.setState({ track: response.data.track })
  }

  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const editedTrack = Object.assign(this.state.track, updatedField)

    this.setState({ track: editedTrack })
  }

  handleSubmit = async event => {
    event.preventDefault()
    await axios({
      url: `${apiUrl}/tracks/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        track: this.state.track
      }
    })
      .then(() => this.props.alert(`${this.state.track.title} has been updated!`, 'success'))
    this.setState({ updated: true })
  }

  render () {
    const { updated, track } = this.state
    if (updated) {
      return <Redirect to={`/tracks/${this.props.match.params.id}`} />
    }
    return (
      <Layout>
        <TrackFormEdit
          track={track}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancelPath={`/tracks/${this.props.match.params.id}`}
        />
      </Layout>
    )
  }
}

export default TrackEdit
