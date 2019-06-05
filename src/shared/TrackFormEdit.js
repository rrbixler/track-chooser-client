import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TrackForm = ({ track, handleChange, handleSubmit, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control className="rounded-0"
        name="title"
        type="string"
        placeholder="Title"
        value={track.title}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Artist</Form.Label>
      <Form.Control className="rounded-0"
        name="artist"
        placeholder="Artist"
        type="string"
        value={track.artist}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Date</Form.Label>
      <Form.Control className="rounded-0"
        name="date"
        type="date"
        placeholder="YYYY-MM-DD"
        value={track.date}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Duration</Form.Label>
      <Form.Control className="rounded-0"
        name="duration"
        type="integer"
        placeholder="seconds"
        value={track.duration}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Tempo</Form.Label>
      <Form.Control className="rounded-0"
        name="tempo"
        type="integer"
        placeholder="bpm"
        value={track.tempo}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Key Signature</Form.Label>
      <Form.Control className="rounded-0"
        name="keysig"
        type="integer"
        placeholder="key signature"
        value={track.keysig}
        pattern="[0-9]*"
        onChange={handleChange}
      />
    </Form.Group>
    <Button variant="info" type="submit" className="rounded-0">Submit Track</Button>
    <Link to='/tracks'><Button variant="warning" className="rounded-0">Cancel</Button></Link>
  </Form>
)

export default TrackForm
