import axios from 'axios'

const deleteThread = (setRedirect, apiRoute, id) => {
    const deleteURL = `/api/posts/${id}`
    const replyURL = `/api/replies/${id}`
    let replies
    axios.delete(deleteURL)
    .then(response => {
        setRedirect('/' + apiRoute)
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
    axios.get(replyURL)
    .then(response => {
        replies = response.data
        replies.forEach(reply => {
            let url = `/api/replies/${reply._id}`
            axios.delete(url)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        });
    })
    .catch(error => {
        console.log(error)
    })
}

export default deleteThread