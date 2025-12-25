import { createContext,  useState } from "react";
import { jobsData } from "../assets/assets";


const AppContext = createContext()

export { AppContext }

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchfilter] = useState({
        title: "",
        location: ""
    })

    const [isSearched, setIsSearched] = useState(false)

    const [jobs,setJobs] = useState(jobsData)


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