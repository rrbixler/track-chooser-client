import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// destructuring^^^^^

import axios from 'axios'
import apiUrl from '../apiConfig'

import Layout from '../shared/Layout'
import TrackForm from '../shared/TrackForm'

class TrackCreate extends Component {
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
      createdTrackId: null
    }
  }

  handleSubmit = async event => {
    // make axios requst, handle success, etc
    event.preventDefault()
    console.log('submitted!', event)

    const response = await
    axios.post(`${apiUrl}/tracks`, {
      track: this.state.track
    })
    this.setState({ createdTrackId: response.data.track.id })
  }

  handleChange = event => {
    // access and update state
    console.log('changing stuff!', event)
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const editedTrack = Object.assign(this.state.track, updatedField)

    this.setState({ track: editedTrack })
  }

  render () {
    const { createdTrackId, track } = this.state
    if (createdTrackId) {
      return <Redirect to={`/tracks/${createdTrackId}`} />
    }
    return (
      <Layout>
        <TrackForm
          track={track}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Layout>
    )
  }
}

export default TrackCreate
