import React from 'react'
import Navbar from '../Navbar'
import '../../App.css'

const About = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1 className='generic-title'>About</h1>
                <p className='generic-paragraph'>Smpl is an image board developed and maintained by Robert Sweet, a Full Stack Developer and an Avid Fisherman.</p>
            </main>
        </div>
    )
}
export default About