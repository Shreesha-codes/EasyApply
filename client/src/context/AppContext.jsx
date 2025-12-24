import { createContext, useState } from "react";

const AppContext = createContext()

export { AppContext }

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchfilter] = useState({
        title: "",
        location: ""
    })

    const [isSearched, setIsSearched] = useState(false)


    const value = {
        setSearchfilter, searchFilter,
        setIsSearched, isSearched
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext