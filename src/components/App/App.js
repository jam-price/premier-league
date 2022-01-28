import { useEffect } from "react"
import fetchData from "../../api"

const App = () => {
    useEffect(() => {
        fetchData();
    }, [])
    
    return <div>here</div>
}

export default App