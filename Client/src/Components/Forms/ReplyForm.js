import React, { useState } from 'react'
import axios from 'axios'
import FileUploader from '../Reusable/FileUploader'
import FormButtons from '../Reusable/FormButtons'

const ReplyForm = (props) => {
    const [file, setFile] = useState(null)
    const [uploadFile, setUploadFile] = useState(null)
    const url = '/api/replies'

    const chooseImage = (e) => {
        setFile(e.target.files[0])
    }

    const uploadImg = (e) => {
        e.preventDefault()
        setUploadFile(file)
    }

    const submitReply = () => {
        const formData = new FormData()
        formData.append('threadID', props.threadId)
        formData.append('replyID', props.replyId)
        formData.append('content', document.getElementById('reply-text').value)
        formData.append('image', uploadFile)

        axios.post(url, formData, {headers: {'Content-Type': 'multipart/form-data' }})
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

    return (
        <div className='reply-form-div'>
            <form className='reply-form'>
                <textarea 
                    className='content-input' 
                    type='text' 
                    cols='120' 
                    rows='8' 
                    id='reply-text'
                />
                <FileUploader 
                    chooseImage={chooseImage} 
                    uploadImg={uploadImg} 
                    file={file} 
                />
                <FormButtons
                    cancelCallBack={props.cancelCallBack}
                    cancelText='Cancel'
                    submitPost={submitReply}
                    submitText='Submit Reply'
                />
            </form>
        </div>
    )
}

export default ReplyForm