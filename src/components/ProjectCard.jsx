'use client'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard( {project} ) {
  return (
    <div className='group border border-white rounded-lg my-5 p-3 bg-gray-800 bg-opacity-80 hover:translate-x-3 transition-all duration-300'>
      <div className='relative w-full rounded-md overflow-hidden mb-3'>
        <div className='pt-[56.25%]'></div>
        {project.thumbnail && project.thumbnail.trim() !== '' ? (
          <img
            src={project.thumbnail}
            alt={`${project.name} thumbnail`}
            className='absolute inset-0 w-full h-full object-cover'
            loading='lazy'
          />
        ) : (
          <div className='absolute inset-0 bg-gray-700 flex items-center justify-center'>
            <span className='text-gray-300'>will be add soon</span>
          </div>
        )}
      </div>
      <h2 className='text-2xl font-bold text-white'>‣ {project.name}</h2>
      <p className='text-gray-200'>
        {project.description || 'No description available'}
      </p>
      <p className='text-gray-200 mb-2'>
        <span className='font-semibold'>Tech Stack: </span>
        {project.techStack.join(', ')}
      </p>
      <Link href={project.repository}>
          <div className='flex w-fit p-2 rounded-md hover:bg-emerald-500 hover:font-bold'>
            <p className='text-gray-200 font-semibold group-hover:text-cyan-800'>&#128279; Repository Link</p>
          </div>
      </Link>

      {project.deployLink ? (
        <Link href={project.deployLink}>
          <div className='flex w-fit p-2 rounded-md hover:bg-emerald-500 hover:font-bold'>
            <p className='text-gray-200 font-semibold  group-hover:text-cyan-800'>&#128279; Deploy Link</p>
          </div>
        </Link>
      ) : (
        <p className='text-gray-200 text-opacity-50'>{"<Not Deployed Yet>"}</p>
      )}
    </div>
  )
}
