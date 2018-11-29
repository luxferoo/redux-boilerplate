import {FETCH_POSTS, NEW_POST} from "./types";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
                data: posts.slice(0, 9),
                type: FETCH_POSTS
            }
        ))
};

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => {dispatch({data, type: NEW_POST})})
};