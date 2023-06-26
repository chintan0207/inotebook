import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {

const c =useContext(noteContext)

useEffect(() => {
    c.update();
    // eslint-disable-next-line
}, []);
  return (
    <div>This is {c.state.name}. {c.state.name} study in {c.state.class}</div>
  )
}

export default About