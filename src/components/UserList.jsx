import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"

//UserList Component
const UserList = ()=>{
    
    const {data, loading} = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) {
        return <h1>Loading...</h1>
    }

    //if loading is false, display users
    return (
        <div>
            {
                data.map((user) => {
                    return (
                        <div key={user.id}>
                           {/**Link component direct to dynamic path and pass in state */}
                           <Link to = {`/users/${user.id}`} state = {user}>View User </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList;