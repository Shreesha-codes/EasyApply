import React from 'react'
import { assets } from '../assets/assets.js'

const JobCard = ({job}) => {
  return (
    <div className='border-radius-600 p-2 shadow rounded'>
      <div className='flex justify-between items-center '>
       <img src={assets.company_icon} alt="Company Logo" />
      </div>
      <h4 className='flex items-center font-medium text-xl mt-2'>{job.title}</h4>
      <div className='flex items-center gap-3 mt-3 text-xs '>
        <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
            {job.location}
        </span>
        <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
            {job.level}
        </span>
      </div>
      <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
      <div className='mt-4 flex gap-4 text-sm'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded'>Apply Now</button>
        <button className='text-gray-500 border gray-500 px-4 py-2'>Learn More</button>
      </div>
    </div>
  )
}

export default JobCard
