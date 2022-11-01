import React from 'react';
import './createpost.css'
const CreatePost = () => {
    const handleSubmit = (e) =>{

    }
    return (
        <div className='createPost'>
            <h1>New post</h1>
            <form action="" onSubmit={handleSubmit}>
                <div htmlFor="">Title</div>
                <input type="text" />
                <div htmlFor="">Content</div>
                <input type="text" style={{height:"50px"}}/>
                <div className="">
                <button className = "addBtn"type='submit'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;