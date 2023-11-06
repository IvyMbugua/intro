import {Link } from "react-router-dom"
import { useState, useEffect } from "react"

//UserList Component
const UserList = ()=>{
    //State to store users fetched from API
    const [users, setUsers] = useState([])

    //Function to fetch users from API 
    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
            .catch(error => console.log(error))
    }

    //useEffect to fetch users from API
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            {/** Link component to direct to dynamic path and pass in state */}
                            <Link to={`/users/${user.id}`} state={user}>View User</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList;