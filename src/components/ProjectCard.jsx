import React from 'react'

export default function ProjectCard() {
  return (
    <div className='border border-white rounded-lg'>
        <div className='flex justify-between items-center'>
            <h2 className='text-xl font-semibold text-white'>Project Name</h2>
            <button className='p-2 bg-cyan-600 rounded-lg text-white'>View</button>
        </div>
        <p className='text-gray-200'>Project Description</p>
    </div>
  )
}
