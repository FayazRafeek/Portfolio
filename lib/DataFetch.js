import axios from 'axios'

export const fetchBlogLists = async() => {

    const resp = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    if(resp.status === 200) {
        return resp.data
    } else {
        return {error: true}
    }
    
}

export const fetchProjectLists = async() => {

    const resp = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    if(resp.status === 200) {
        return resp.data
    } else {
        return {error: true}
    }
    
}
