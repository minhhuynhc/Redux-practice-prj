import React, { useEffect, useState } from 'react';
import './userList.css'

const UserList = () => {
    const [users, setUsers] = useState()
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {setUsers(res)})
    .catch(err => console.log("Error:",err))
    },[])
    return (
        <div>
        {console.log("🎁", users)}
            <div className="firstRow">
                <div className="comlumnHeader">Id</div>
                <div className="comlumnHeader">Name</div>
                <div className="comlumnHeader">Email</div>
                <div className="comlumnHeader">Website</div>
            </div>
            {users && users.map((user) => 
                <div className="user">
                    <div className="">{user.id}</div>
                    <div className="">{user.name}</div>
                    <div className="">{user.email}</div>
                    <div className="">{user.website}</div>
                </div>
            )}






        </div>








    );
};

export default UserList;