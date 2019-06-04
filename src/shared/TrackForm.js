import React from 'react'
import { Link } from 'react-router-dom'

const TrackForm = ({ track, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Track</label>
    <input
      name="title"
      type="string"
      placeholder="Title"
      value={track.title}
      onChange={handleChange}
    />
    <input
      name="artist"
      placeholder="Artist"
      type="string"
      value={track.artist}
      onChange={handleChange}
    />
    <input
      name="date"
      type="date"
      placeholder="YYYY-MM-DD"
      value={track.date}
      onChange={handleChange}
    />
    <input
      name="duration"
      type="integer"
      placeholder="seconds"
      value={track.duration}
      onChange={handleChange}
    />
    <input
      name="tempo"
      type="integer"
      placeholder="bpm"
      value={track.tempo}
      onChange={handleChange}
    />
    <input
      name="keysig"
      type="integer"
      placeholder="key signature"
      value={track.keysig}
      pattern="[0-9]*"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
    <Link to='/tracks'><button>Cancel</button></Link>
  </form>
)

export default TrackForm
