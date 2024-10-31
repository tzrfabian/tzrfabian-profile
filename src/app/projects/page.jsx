'use client'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'

export default function Projects() {
  return (
      <div className='mt-16 rounded-md px-4 py-8'>
        <div className='max-md:text-center flex justify-center items-center'>
          <h2 className="md:text-4xl text-slate-100 text-xl font-semibold md:!leading-[50px] mb-2 text-center">
            Lift of My Projects
          </h2>
        </div>
        <div className='items-center max-w-5xl mx-auto'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
      </div>
    </div>
  )
}
