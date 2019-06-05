import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../shared/Layout'
import axios from 'axios'
import apiUrl from '../apiConfig'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'

class Track extends Component {
  constructor () {
    super()

    this.state = {
      track: null,
      deleted: false
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
    this.setState({ track: response.data })
  }
  // // const { user } = this.props
  // const response = await axios(`${apiUrl}/tracks/${this.props.match.params.id}`)
  // console.log(response)
  // console.log(this.props)
  // // const myTracks = []
  // // response.data.track.filter(track => {
  // //   if (user.user_id === track.user_id) {
  // //     myTracks.push(track)
  // //   }
  // // })
  // this.setState({ track: myTracks })

  destroy = async track => {
    await axios({
      url: `${apiUrl}/tracks/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
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
        <Layout>
          <Link to='/tracks'><Button className="rounded-0" variant="outline-info" block>Back to all Tracks</Button></Link>
          <Card>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Row>
                    <Col>Title:</Col>
                    <Col>{ track.track.title }</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Artist:</Col>
                    <Col>{ track.track.artist }</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Date:</Col>
                    <Col>{ track.track.date }</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Run Time: </Col>
                    <Col>{track.track.duration ? track.track.duration : 'unknown'} seconds</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col><p>Tempo:</p></Col>
                    <Col><p>{track.track.tempo ? track.track.tempo : 'unknown'} bpm</p></Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col><p>Key Signature:</p></Col>
                    <Col><p>{track.keysig ? track.keysig : 'unknown'}</p></Col>
                  </Row>
                  <Row>
                    <Col><p>User ID:</p></Col>
                    <Col><p>{`${this.props.user.id}` ? `${this.props.user.id}` : 'unknown'}</p></Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>
                      <Link to={'/tracks/' + track.track.id + '/edit'}>
                        <Button className="rounded-0" variant="outline-success">Edit</Button>
                      </Link>
                    </Col>
                    <Col>
                      <Button className="rounded-0" variant="outline-warning" onClick={this.destroy}>Delete Track</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Layout>
      </div>
    )
  }
}
export default Track
