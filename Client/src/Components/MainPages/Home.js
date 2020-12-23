import React from 'react'
import Navbar from '../Navbar'
import '../../App.css'

const Home = () => {

    return (
        <>
            <Navbar />
            <main>
                <h1 className='generic-title'>Welcome to Smpl!</h1>
                <p className='generic-paragraph'>
                    Smpl is just that, a simple image board to discuss topics and share images! 
                    Currently we only have a few boards available, but if you have any suggestions please feel free to create a suggestion thread in the dedicated board!
                </p>
            </main>
        </>
    )
}
export default Home