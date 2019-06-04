import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../apiConfig'

// import Layout from '../shared/Layout'
import TrackForm from '../shared/TrackForm'

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
    const response = await
    axios(`${apiUrl}/tracks/${this.props.match.params.id}`)
    this.setState({ track: response.data.track })
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

  handleSubmit = async event => {
    event.preventDefault()
    await axios({
      url: `${apiUrl}/tracks/${this.props.match.params.id}`,
      method: 'PATCH',
      data: {
        track: this.state.track
      }
    })
    this.setState({ updated: true })
  }

  render () {
    const { updated, track } = this.state
    if (updated) {
      return <Redirect to={`/tracks/${this.props.match.params.id}`} />
    }
    return (
      <div>
        <TrackForm
          track={track}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancelPath={`/tracks/${this.props.match.params.id}`}
        />
      </div>
    )
  }
}

export default TrackEdit
