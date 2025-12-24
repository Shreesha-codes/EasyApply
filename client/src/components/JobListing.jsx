import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const JobListing = () => {
    const { searchFilter, isSearched, setSearchfilter } = useContext(AppContext)
  return (
    <div>
      {/* side bar*/}
    <div>
        {/*seearchfilter from hero component */}
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
            <h3>Current search</h3>
            <div>
                {searchFilter.title && (
                    <span>
                        Title: {searchFilter.title}
                        <img onClick={() => setSearchfilter({...searchFilter, title: ""})} className="cursor-pointer" src={assets.cross_icon} alt="cross icon" />
                    </span>
                )}
                {searchFilter.location && (
                    <span>
                        Location: {searchFilter.location}
                     <img onClick={() => setSearchfilter({...searchFilter, location: ""})}  
                      className="cursor-pointer" src={assets.cross_icon} alt="cross icon" />

                    </span>
                )}
            </div>
            </>
        )}

    </div>
    </div>
  )
}

export default JobListing
