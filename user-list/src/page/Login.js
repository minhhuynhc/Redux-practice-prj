import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Login = () => {
    const nevigate = useNavigate()
    const [user, setUser] = useState({username:"", password:""})
    const handleChange = (e) =>{
        console.log(e.target.value)
       setValueForUser(e.target.name, e.target.value)
    }
    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser(newVal);
      };

    const handleSubmit = () => {
    
        const check = user.username==="admin" && user.password==="letmein"
        check && nevigate('/users') 
    }
    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">User name</label>
            <input type="text" value={user.userName} name="username" onChange={handleChange}/>
            <label htmlFor="">Password</label>
            <input type="password" value={user.password} name="password" onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
        </div>
    );
};

export default Login;