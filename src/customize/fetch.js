import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    let [Data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    let [isError, setIsError] = useState(false)
    useEffect(() => {
        // const ourrequest = axios.CancelToken.source()
        async function fetchdata() {
            try {
                let res = await axios.get(url)
                let data = res && res.data && res.data.data ? res.data.data : res.data
                setData(data)
                setLoading(false)
                setIsError(false)
            }
            catch (error) {
                setLoading(false)
                setIsError(true)
            }
        }
        // fetchdata()
        setTimeout(() => fetchdata(), 3000)


    }, [url])
    return { Data, loading, isError }
}
export default useFetch;