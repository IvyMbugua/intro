import {Link } from "react-router-dom"
import { useState, useEffect } from "react"
import useFetch from "../hooks/useFetch"

//UserList Component
const UserList = ()=>{
    //useFetch hook used to fetch users from API
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users")
    //if loading is true, display loading message
    if(loading){
        return <h1>Loading...</h1>
    }

    //if loading is false, display users
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                           <h1>{user.name}</h1>
                           <h2>{user.email}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList;