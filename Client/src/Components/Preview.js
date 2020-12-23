import React from 'react'

const Preview = (props) => {
    let post = props.post[0]
    console.log(post)
    return(
        <div className='preview' id='preview'>
            <div className='row'>
                <div className='col'>
                    {post.imageKey && 
                        <img 
                            className='preview-image' 
                            id={`image-${post.id}`} 
                            src={`https://smpl-images.s3.amazonaws.com/${post.imageKey}`} 
                        />
                    }
                </div>
                <div className='col thread-text-col'> {/* second column (text, id) */}
                        <div className='thread-num-div'>
                            <em className='thread-id-num'>{'id: ' + post._id.substring(8)}</em>
                        </div>
                        {post.replyID && 
                            <div className='thread-num-div'>
                                <em className='thread-reply-num'>{'>>>' + post.replyID.substring(8)}</em>
                            </div>
                        }
                        {post.title && <h3 className='thread-title'>{post.title}</h3>}
                        <p className='thread-content'>{post.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Preview