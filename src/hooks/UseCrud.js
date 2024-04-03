import axios from 'axios'
import React, { useState } from 'react'

const UseCrud = (BASEURL) => {
    const [response, setResponse] = useState()

    const getApi = (path) => {
        const url = `${BASEURL}${path}`
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    const postApi = (path, data) => {
        const url = `${BASEURL}${path}`
        axios.post(url,data)
        .then(res => {
            console.log(res.data)
            setResponse([...response, res.data])
        })
        .catch(err => console.log(err))
    }

    const deleteApi = (path, id) => {
        const url = `${BASEURL}${path}${id}/`
        axios.delete(url, data)
        .then(res => {
            console.log(res.data)
            setResponse(response.filter(e => e.id === id? res.data : e))
        })
        .catch(err => console.log(err))

    }

    const updateApi = (path, data, id) => {
        const url = `${BASEURL}${path}${id}/`
        axios.patch(url, data)
        .then(res => {
            console.log(res.data)
            setResponse(response.map(e => e.id === id? res.data : e))
        })
        .catch(console.log(err))
    }

    return [response, getApi, postApi, deleteApi,updateApi]
}

export default UseCrud