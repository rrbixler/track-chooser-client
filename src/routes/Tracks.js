import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
    const response = await axios({
      url: `${apiUrl}/tracks`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        title: this.state.title,
        artist: this.state.artist,
        date: this.state.date,
        duration: this.state.duration,
        tempo: this.state.tempo,
        keysig: this.state.keysig
      }
    })
    this.setState({ tracks: response.data.tracks })
  }

  render () {
    const tracks = this.state.tracks.map(track => (
      <ListGroup.Item key={track.id}>
        <Container>
          <Row>
            <Col><Link to={'./tracks/' + track.id}><Button className="rounded-0" variant="outline-info" block>{track.title}</Button></Link></Col>
            <Col><p>{track.artist}</p></Col>
          </Row>
        </Container>
      </ListGroup.Item>
    ))
    return (
      <Layout>
        <h3>Track List</h3>
        <Container>
          <Row>
            <Col>Title</Col>
            <Col>Artist</Col>
          </Row>
        </Container>
        <ListGroup>
          {tracks}
        </ListGroup>
      </Layout>
    )
  }
}

export default Tracks
