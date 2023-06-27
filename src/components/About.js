import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {

const c =useContext(noteContext)

  return (
    <div>This is about Page</div>
  )
}

export default About