import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import PostForm from './Forms/PostForm'
import { Link } from 'react-router-dom'
import { changeTheme, cleanUpTheme, getTheme } from '../config/themechange'
import '../App.css'


const Board = (props) => {
    const [posts, setPosts] = useState([])
    const [form, showForm] = useState(false)
    const url = 'api/posts/board/' + props.apiRoute

    useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response.data)
            setPosts(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }, [url])

    useEffect(() => {
        let theme = getTheme(props.parentBoard)
        changeTheme(theme)
        return cleanUpTheme
    }, [props.parentBoard])


    const createForm = (isOpen) => {
        let submitButton = document.getElementById('board-button')
        if(isOpen){
            showForm(true)
            submitButton.classList.add('board-button-form-open')
            submitButton.classList.remove('board-button-hover')
        }
        else{
            submitButton.classList.remove('board-button-form-open')
            submitButton.classList.add('board-button-hover')
            showForm(false)
        }

    }
    return (
        <>
            <Navbar />
            <main>
                <h1 className='generic-title'>{props.boardName}</h1>
                <h2 className='generic-title'>{props.description}</h2>
                <div className='board-button-wrapper'>
                    <button 
                        className='board-button board-button-hover' 
                        onClick={() => createForm(true)} 
                        id='board-button'
                        >
                            Create Post
                        </button>
                </div>
                {form && <PostForm apiRoute={props.apiRoute} cancelCallBack={createForm} />}
                <div className='board-post-grid'>
                    {posts.map(post => (
                        <Link to={{pathname: '/' + props.apiRoute + '/' + post._id}} className='post-link' key={post._id}>
                        <div className="board-post">
                            <h3>{post.title}</h3>
                            {post.imageKey && 
                                <img 
                                    src={`https://smpl-images.s3.amazonaws.com/${post.imageKey}`} 
                                    height='100px'
                                    alt=''
                                />}
                            <p className='post-content'>{post.content}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}
export default Board