import React, { useEffect, useState } from 'react'
import ReplyForm from './Forms/ReplyForm'
import Preview from './Preview'



const ThreadPost = (props) => {
    const [hoverPreview, setHoverPreview] = useState(false)
    let listenerId

    const mouseOverReply = (replyID) => {
        setHoverPreview(true)
        document.getElementById(replyID).classList.add('thread-reply-hover-indicator')
    }
    
    const mouseLeaveReply = (replyID) => {
        setHoverPreview(false)
        document.getElementById(replyID).classList.remove('thread-reply-hover-indicator')
    }


    
    const linkClick = (e, replyID) => {
        if(listenerId){
            document.getElementById(listenerId).classList.remove('thread-reply-click')
        }
        listenerId = replyID
        const element = document.getElementById(replyID)
        element.classList.add('thread-reply-click')
        window.addEventListener('click', linkNotClick)
        e.stopPropagation()
        console.log('listener added')
    }
    
    const linkNotClick = (e) => {
        const element = document.getElementById(listenerId)
        if (!element.contains(e.target)){
            element.classList.remove('thread-reply-click')
            console.log('listener removed')
            window.removeEventListener('click', linkNotClick)
        }
    }
    
    const bigImage = (id) => {
        let image = document.getElementById(id)
        if(image.clientHeight === 200){
            image.style.height = 'auto'
        }
        else{
            image.style.height = '200px'
        }
    }

    useEffect(() => {
        if(hoverPreview){
            let link = document.getElementById(`numlink${props.id}`)
            let preview = document.getElementById('preview')
            let scrollY = Math.round(document.getElementById('background').scrollTop)
            preview.style.top = `${(link.offsetTop - scrollY) + link.offsetHeight}px`
            preview.style.left = `${link.offsetLeft + Math.floor(link.offsetWidth / 3)}px`
            preview.style.visibility = 'visible'
        }
    },[hoverPreview])

    return (
        <>
        {hoverPreview && 
            <Preview post={props.replyPost} />
        }
        <div className='thread-post' id={props.id}>
            <div className='row'>
                <div className='col'> {/*first column (image only) */}
                    {props.imageKey && 
                            <img 
                                className='thread-image' 
                                id={`image-${props.id}`} 
                                onClick={() => bigImage(`image-${props.id}`)} 
                                src={`https://smpl-images.s3.amazonaws.com/${props.imageKey}`} 
                            />
                    }
                </div>{/*first col*/}
                <div className='col thread-text-col'> {/* second column (text, id) */}
                    <div className='thread-num-div'>
                        <em className='thread-id-num'>{'id: ' + props.id.substring(8)}</em>
                    </div>
                    <div className='thread-num-div'>
                        {props.replyID && 
                            <a 
                                id={`numlink${props.id}`}
                                href={'#' + props.replyID}
                                onClick={(e) => linkClick(e, props.replyID)}
                                onMouseEnter={() => mouseOverReply(props.replyID)} 
                                onMouseLeave={(e) => mouseLeaveReply(props.replyID)}
                            >
                                <em className='thread-reply-num'>{'>>>' + props.replyID.substring(8)}</em>
                            </a>
                        }
                    </div>
                    {props.title && <h3 className='thread-title'>{props.title}</h3>}
                    <p className='thread-content'>{props.content}</p>
                </div>{/*second col */}
            </div>{/*first row */}
            <div className='row row-center'>
                <div className='thread-button-div'>
                    <button 
                        className='form-button' 
                        onClick={() => props.showReply(props.id)}
                    >
                        reply
                    </button>
                    {props.title && 
                        <button 
                            className='form-button' 
                            onClick={props.deleteThread}
                        >
                            delete thread
                        </button> 
                    }
                </div>
            </div>{/*row*/}
        </div>
        {props.replyForm[props.id] && 
            <ReplyForm key={props.id} threadId={props.threadId} replyId={props.id} cancelCallBack={props.setReplyForm} /> 
        }
        </>
    )
}

export default ThreadPost