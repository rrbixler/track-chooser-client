import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../shared/Layout'
import axios from 'axios'
import apiUrl from '../apiConfig'

class Track extends Component {
  constructor (props) {
    super(props)

    this.state = {
      track: null,
      deleted: false
    }
  }

  async componentDidMount () {
    const response = await axios(`${apiUrl}/tracks/${this.props.match.params.id}`)
    this.setState({ track: response.data.track })
  }

  destroy = async track => {
    await axios.delete(`${apiUrl}/tracks/${this.props.match.params.id}`)
    this.setState({ deleted: true })
  }

  render () {
    const { track, deleted } = this.state
    if (!track) {
      return (
        <Layout>
          <p>Loading ...</p>
        </Layout>
      )
    }
    if (deleted) {
      return <Redirect to={
        { pathname: '/tracks', state: { msg: 'Track Successfully deleted!' } }
      }/>
    }

    return (
      <div>
        <h4>{ track.title }</h4>
        <h6>{ track.artist }</h6>
        <h6>{ track.date }</h6>
        <p>Run Time: {track.duration ? track.duration : 'unknown'}</p>
        <p>Tempo: {track.tempo ? track.tempo : 'unknown'}</p>
        <p>Key Signature: {track.keysig ? track.keysig : 'unknown'}</p>
        <Link to={'/tracks/' + track.id + '/edit'}>
          <button>Edit</button>
        </Link>
        <button onClick={this.destroy}>Delete Track</button>
        <Link to='/tracks'>Back to all Tracks</Link>
      </div>
    )
  }
}
export default Track
