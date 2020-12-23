import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FileUploader from '../Reusable/FileUploader'
import FormButtons from '../Reusable/FormButtons'


const PostForm = (props) => {
    const [file, setFile] = useState(null)
    const [uploadFile, setUploadFile] = useState(null)
    const url = '/api/posts/'

    const chooseImage = (e) => {
        setFile(e.target.files[0])
    }

    const uploadImg = (e) => {
        e.preventDefault()
        setUploadFile(file)
    }

    const submitPost = (e) => {
        if (document.getElementById('title').value === ""){
            e.preventDefault()
            alert('Post must have a title!')
        }

        const formData = new FormData()
        formData.append('title', document.getElementById('title').value)
        formData.append('content', document.getElementById('content').value)
        formData.append('image', uploadFile)
        formData.append('board', props.apiRoute)

        axios.post(url, formData, {headers: {'Content-Type': 'multipart/form-data' }})
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
    
    useEffect(() => {
        if(uploadFile !== null){
            if((uploadFile.size / 1024 / 1024) > 10){
                setFile(null)
                setUploadFile(null)
                alert('file cannot exceed 10mb')
            }
            else{
                alert('upload complete')
            }
        } 
    },[uploadFile])

    return(
        <div className='post-form-div post-form-div-visible' id='post-form-div'>
            <form className='post-form'>
                <label>Title</label>
                <input className='title-input' type='text' id='title' />
                <label>Content</label>
                <textarea 
                    className='content-input' 
                    type='text' 
                    cols='40' 
                    rows='5' 
                    id='content'
                />
                <FileUploader 
                    chooseImage={chooseImage} 
                    uploadImg={uploadImg} 
                    file={file} 
                />
                <FormButtons
                    cancelCallBack={props.cancelCallBack}
                    cancelText='Cancel'
                    submitPost={submitPost}
                    submitText='Submit Post'
                />
            </form>
        </div>
    )
}

export default PostForm