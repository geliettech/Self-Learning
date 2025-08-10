"use client"
import {useState} from 'react'

const About = () => {
    
  const [count, setCount] = useState(0)
    console.log("Hey, is this in server or client")
  return (
    <div>About Page</div>
  )
}

export default About