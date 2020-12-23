import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
// import ReplyForm from './Forms/ReplyForm'
import{ Redirect, Link } from 'react-router-dom'
import { changeTheme, cleanUpTheme, getTheme } from '../config/themechange'
import useGetThread from '../API/useGetThread'
import deleteThread from '../API/deleteThread'
import ThreadPost from './ThreadPost'


const Thread = (props) => {
    const {_id} = props.match.params
    const [redirect, setRedirect] = useState(null)
    const [replyForm, setReplyForm] = useState({})
    const [isLoading, data, error] = useGetThread(_id)

    useEffect(() => {
        let theme = getTheme(props.parentBoard)
        changeTheme(theme)
        return cleanUpTheme
    }, [props.parentBoard])

    if (isLoading) {
        return <div>Loading...</div>
    }

    const showReply = (id) => {
        setReplyForm((prevState) => ({...prevState, [id]: true}))
    }

    const threadArray = error ? [] : data
 
    return(
        <>
            <Navbar />
            {redirect ? <Redirect to={redirect}></Redirect> : null}
            <main>
                <Link to={{pathname: '/' + props.apiRoute }} className='post-link'>
                    <h1 className='generic-title'>{props.boardName}</h1>
                </Link>
                <div className='thread-body'>
                    {threadArray.map(threadPost => (
                        <ThreadPost
                            key={_id}
                            threadId={_id}
                            id={threadPost._id} 
                            imageKey={threadPost.imageKey}
                            replyID={threadPost.replyID}
                            replyPost={threadArray.filter(x => x._id === threadPost.replyID)}
                            title={threadPost.title}
                            content={threadPost.content}
                            replyForm={replyForm}
                            showReply={showReply}
                            deleteThread={() => {deleteThread(setRedirect, props.apiRoute, _id)}}
                            setReplyForm={setReplyForm}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Thread