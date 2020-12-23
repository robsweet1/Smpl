import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import '../../App.css'

const Boards = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1 className='generic-title'>BOARDS</h1>
                <div className='boards-body'>
                    <div className='boards-category-box fishing-primary-background' >
                        <h2 className='boards-category-title'>FISHING</h2>
                        <Link className='boards-link' to='/catches'><em>Catches</em></Link>
                        <Link className='boards-link' to='/recipes'><em>Recipes</em></Link>
                        <Link className='boards-link' to='/tackle'><em>Tackle</em></Link>
                        <Link className='boards-link' to='/tipsntricks'><em>Tips and Tricks</em></Link>
                    </div>
                    <div className='boards-category-box fashion-primary-background' >
                        <h2 className='boards-category-title'>FASHION</h2>
                        <Link className='boards-link' to='/mensfashion'><em>Men's Fashion</em></Link>
                        <Link className='boards-link' to='/womensfashion'><em>Women's Fashion</em></Link>
                    </div>
                    <div className='boards-category-box miscellaneous-primary-background' >
                        <h2 className='boards-category-title'>MISC</h2>
                        <Link className='boards-link' to='/anything'><em>Anything</em></Link>
                        <Link className='boards-link' to='/suggestions'><em>Suggestions</em></Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Boards