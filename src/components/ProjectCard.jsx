'use client'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard( {project} ) {
  return (
    <div className='border border-white rounded-lg my-5 p-3 bg-gray-800 bg-opacity-80 hover:translate-x-3 transition-all duration-300'>
      <h2 className='text-2xl font-bold text-white'>{project.name}</h2>
      <p className='text-gray-200'>
        {project.description || 'No description available'}
      </p>
      <p className='text-gray-200 mb-2'>
        <span className='font-semibold'>Tech Stack: </span>
        {project.techStack.join(', ')}
      </p>
      <Link href={project.repository}>
        <p className='text-gray-200 font-semibold hover:underline hover:text-cyan-600'>Repository Link</p>
      </Link>

      {project.deployLink ? (
        <Link href={project.deployLink}>
          <p className='text-gray-200 font-semibold hover:underline hover:text-cyan-600'>Deploy Link</p>
        </Link>
      ) : (
        <p className='text-gray-200 text-opacity-50'>{"<Not Deployed Yet>"}</p>
      )}
    </div>
  )
}
