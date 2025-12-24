import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {
    const { searchFilter, isSearched, setSearchfilter, jobs } = useContext(AppContext)
  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
      {/* side bar*/}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/*seearchfilter from hero component */}
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <>
            <h3 className='font-medium text-lg mb-4'>Current search</h3>
            <div className='mb-4 text-gray-600 flex flex-row items-center gap-2'>
              {searchFilter.title && (
                <span className='inline-flex items-center gap-1 bg-white border border-blue-200 px-2 py-0.5 rounded text-xs'>
                   {searchFilter.title}
                  <img onClick={() => setSearchfilter({ ...searchFilter, title: "" })} className="cursor-pointer w-3 h-3" src={assets.cross_icon} alt="cross icon" />
                </span>
              )}
              {searchFilter.location && (
                <span className='inline-flex items-center gap-1 bg-red-50 border border-red-200 px-2 py-0.5 rounded text-xs'>
                 {searchFilter.location}
                  <img onClick={() => setSearchfilter({ ...searchFilter, location: "" })} className="cursor-pointer w-3 h-3" src={assets.cross_icon} alt="cross icon" />
                </span>
              )}
            </div>
          </>
        )}

        {/*Category Filter*/} 
      <div className='max-lg:hidden'>
        <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
        <ul className='space-y-4 text-gray-600'>
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className='scale-125' type="checkbox" />
                {category}
              </li>
            ))}
        </ul>
      </div>
      {/*Search by location */}
      <div className='max-lg:hidden mt-14'>
        <h4 className='font-medium text-lg py-4'>Search by Locations</h4>
        <ul className='space-y-4 text-gray-600'>
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className='scale-125' type="checkbox" />
                {location}
              </li>
            ))}
        </ul>
      </div>
      </div>

      {/* job listings */}

      <section className='w-full lg:33/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-medium text-3xl py-2' id ='job-list'>Latest Jobs</h3>
        <p className='mb-8'>Get your dream job here</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:gros-cols-3 gap-4 '>
            {jobs.map((job,index)=>(
                <JobCard key={index} job={job} />
            )
                
            )}
        </div>
      
      
      </section>
        
      

    </div>
  )
}

export default JobListing
