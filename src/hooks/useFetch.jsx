//create a function called useFetch that will take in a URL as a parameter and return the data fetched from the URL as a side effect when the component utilizing it is rendered

//react imports
import { useState, useEffect } from "react"

//userFetch custom hook function created, takes in url to be fetched as a parameter
const useFetch = (url) => {
    //state to sore data fetched from url
    const [data, setData] = useState([])
    //state to store loading loading status
    const [loading, setLoading] = useState(true)

    //function to fetch data from url
    const fetchData = async ()=> {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setLoading(false)
        } catch(error) {
            console.log(error)
            setLoading(false)
        }
    }

    //useEffect hook to fetch data from url
    useEffect(() => {
        fetchData()
    }, [url])

    //the useFetch function return an object theat contains the data and loading state
    return { data, loading }

}

export default useFetch;
