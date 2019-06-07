import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
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
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/tracks`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        track: {
          title: this.state.track.title,
          artist: this.state.track.artist,
          date: this.state.track.date,
          duration: this.state.track.duration,
          tempo: this.state.track.tempo,
          keysig: this.state.track.keysig,
          user_id: `${this.props.user.id}`
        }
      }
    })
      .then(response => this.setState({
        track: response.data.track
      }))
      .then(() => this.props.alert(`${this.state.track.title} has been added to the track list!`, 'success'))
      .then(() => this.props.history.push('/tracks'))
      .catch(() => {
        this.props.alert('Whoops! Failed to add your track. Please try again.', 'danger')
        this.setState({
          title: '',
          artist: '',
          date: '',
          duration: '',
          tempo: '',
          keysig: ''
        })
      })
  }

  handleChange = event => {
    // access and update state
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

export default withRouter((TrackCreate))
