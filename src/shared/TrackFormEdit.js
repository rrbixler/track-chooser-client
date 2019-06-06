import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TrackFormEdit = ({ track, handleChange, handleSubmit, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label className="white">Title</Form.Label>
      <Form.Control className="rounded-0"
        name="title"
        type="string"
        placeholder="Title"
        value={track.title}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="white">Artist</Form.Label>
      <Form.Control className="rounded-0"
        name="artist"
        placeholder="Artist"
        type="string"
        value={track.artist}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="white">Date</Form.Label>
      <Form.Control className="rounded-0"
        name="date"
        type="date"
        placeholder="YYYY-MM-DD"
        value={track.date}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="white">Duration</Form.Label>
      <Form.Control className="rounded-0"
        name="duration"
        type="integer"
        placeholder="seconds"
        value={track.duration}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="white">Tempo</Form.Label>
      <Form.Control className="rounded-0"
        name="tempo"
        type="integer"
        placeholder="bpm"
        value={track.tempo}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="white">Key Signature</Form.Label>
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
    <Link to={cancelPath}><Button variant="warning" className="rounded-0">Cancel</Button></Link>
  </Form>
)

export default TrackFormEdit
