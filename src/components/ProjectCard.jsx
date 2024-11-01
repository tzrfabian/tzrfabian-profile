'use client'
import React from 'react'

export default function ProjectCard() {
  return (
    <div className='border border-white rounded-lg my-3 p-3 bg-gray-800 bg-opacity-80'>
      <h2 className='text-xl font-semibold text-white'>Project Name</h2>
      <p className='text-gray-200'>Project Description</p>
      <p className='text-gray-200 text-sm'>Tech Stack: </p>
    </div>
  )
}
