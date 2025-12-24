import { createContext,  useState } from "react";
import { jobsData } from "../assets/assets";
import { useEffect } from "react";

const AppContext = createContext()

export { AppContext }

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchfilter] = useState({
        title: "",
        location: ""
    })

    const [isSearched, setIsSearched] = useState(false)

    const [jobs,setJobs] = useState([])

    //function to fetch jobs
     const fetchJobs = () => {
        //fetch jobs from jobsData
        setJobs(jobsData)
     }

     useEffect(() => {
        fetchJobs()
     }, [])


    const value = {
        setSearchfilter, searchFilter,
        setIsSearched, isSearched, jobs, setJobs
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext