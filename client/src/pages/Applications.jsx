import { useState } from 'react';
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { assets } from '../assets/assets.js';



const Applications = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)
  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='text-xl font-semibold mb-4'>Your Resume</h2>
        <div className='flex items-center gap-3'>
          {isEdit ? (
            <>
              <label htmlFor="resumeUpload" className='cursor-pointer'>
                <div className='bg-blue-100 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-200 transition-colors inline-flex items-center gap-2'>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z"/>
                  </svg>
                  <span>Select Resume</span>
                </div>
                <input 
                  onChange={(e) => setResume(e.target.files[0])} 
                  accept="application/pdf" 
                  type="file" 
                  id="resumeUpload"
                  className='hidden'
                />
              </label>
              <button 
                onClick={() => setIsEdit(false)} 
                className='bg-green-100 text-green-700 border border-green-400 rounded-lg px-5 py-2 hover:bg-green-200 transition-colors font-medium'
              >
                Save
              </button>
            </>
          ) : (
            <>
              <a className='bg-blue-100 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium inline-flex items-center gap-2' href="">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
                </svg>
                Resume
              </a>
              <button 
                onClick={() => setIsEdit(true)} 
                className='text-gray-700 bg-white border border-gray-300 px-5 py-2 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium'
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Applications
