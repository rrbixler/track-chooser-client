import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'

import axios from 'axios'
import apiUrl from '../apiConfig'

class Tracks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tracks: []
    }
  }

  async componentDidMount () {
    const response = await axios(`${apiUrl}/tracks`)
    this.setState({ tracks: response.data.tracks })
  }

  render () {
    const tracks = this.state.tracks.map(track => (
      <li key={track.id}>
        <Link to={'./tracks/' + track.id}>{track.title}</Link>
      </li>
    ))

    return (
      <Layout>
        <h3>Track list</h3>
        <ul>
          {tracks}
        </ul>
      </Layout>
    )
  }
}

export default Tracks
