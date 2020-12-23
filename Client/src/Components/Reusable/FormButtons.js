import React from 'react'

const FormButtons = (props) => {
    return (
        <div className='button-div'>
            <button className='form-button' onClick={() => props.cancelCallBack(false)}>{props.cancelText}</button>
            <button className='form-button' onClick={props.submitPost}>{props.submitText}</button>
        </div>
    )
}

export default FormButtons