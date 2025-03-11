import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "About",
  description: "about us",
};

const About = () => {
  return (
    <div className="min-vh-100 container">About</div>
  )
}

export default About