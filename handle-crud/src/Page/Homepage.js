import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './homepage.css'
import { useNavigate } from 'react-router-dom';
import store from '../redux/store';
const Homepage = () => {
    const navigate = useNavigate()
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {store.dispatch({type: "addData",data:res.data})})
    .catch(err => console.log(err))
    },[])
    const createNewpost = () => {
        navigate('createPost')
    }
    const editPost = () => {

    }
    const unsubscribe = store.subscribe(()=>{console.log(store.getState());});
    return (
        <div>
            <div className="header">
                <div className="">Post</div>
                <button className='newPost' onClick={createNewpost}>Add new Post</button>
            </div>            
            {store.getState() && store.getState().map((post, index)=>
            <div className='post'>
                <div className="content">
                    <div className="postTitle">{post.title}</div>
                    <div className="postBody">{post.body}</div>
                </div>
                <button className="editButton" onClick={editPost}>Edit</button>
            </div>
            )}

        </div>
    );
};

export default Homepage;