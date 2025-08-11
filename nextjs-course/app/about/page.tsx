// "use client"
// import {useState} from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about Us | Name of Website",
  description: "A lot of Keywords, about us, nextjs, react",
  keywords: "about us, company, mission, AI, keywords",
  twitter: {
    card: "summary_large_image",
    title: "About Us | Name of Website",
    description: "Learn more about our company and mission.",
  },
  authors: [{ name: "John Doe", url: "https://example.com" }],
  creator: "John Doe",
};

const About = () => {
    
  // const [count, setCount] = useState(0)
    console.log("Hey, is this in server or client")
  return (
    <div>About Page</div>
  )
}

export default About