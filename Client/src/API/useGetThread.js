import { useState, useEffect } from "react";
import axios from 'axios'

const useThreadArray = (id) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const opURL = `/api/posts/id/${id}`
    const replyURL = `/api/replies/${id}` 

    useEffect(() => {
        axios
        .get(opURL)
        .then(response => {
            setData([response.data])
            axios
            .get(replyURL)
            .then(response => {
                setData(prevState => prevState.concat(response.data))
                setIsLoading(false)
            })
            .catch(error => {
                setError(error)
            })
        })
        .catch(error => {
            setError(error)
        })
    }, [opURL, replyURL])

    return [isLoading, data, error]
}

export default useThreadArray