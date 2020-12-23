import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true)
        return () => {
            window.removeEventListener('scroll', handleScroll, true)
    }
    })

    const handleScroll = (e) => {
        const prevScrollPosition = scrollPosition
        if (e.srcElement.scrollTop <= 0)  {
            setVisible(true)
            setScrollPosition(0)
        }   
        else {
            setVisible(prevScrollPosition > e.srcElement.scrollTop)
            setScrollPosition(e.srcElement.scrollTop)
        }
       

    }

    return (
        <header className={'navbar' + (visible ?  '': ' navbar-hidden')}>
            <Link to='/'>
                <button className='navbar-button'>Home</button>
            </Link>
            <Link to='/boards'>
                <button className='navbar-button'>Boards</button>
            </Link>
            <Link to='/about'>
                <button className='navbar-button'>About</button>
            </Link>
        </header>
    )
}
export default Navbar