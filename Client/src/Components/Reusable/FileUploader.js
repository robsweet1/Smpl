import React from 'react'
import { GrUpload } from 'react-icons/gr'

const FileUploader = (props) => {
    return (
        <>
            <label className='input-file-label form-button' htmlFor='file'>
                <input className='input-file' type='file' id='file' accept='image/png, image/jpeg' hidden onChange={props.chooseImage} />
                <GrUpload className='icon'/>
                Choose Image
            </label>
            {props.file && 
                <div className='button-div'>
                    <span className='image-name'>{props.file ? props.file.name : null}</span>
                    <button className='form-button' onClick={props.uploadImg}>Upload</button>
                </div>
            }   
        </>
    )
}

export default FileUploader