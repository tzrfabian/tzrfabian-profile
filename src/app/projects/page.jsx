'use client'
import ProjectCard from '@/components/ProjectCard'
import data from '@/data/data.json'

export default function Projects() {
  const projects = data.projects;

  console.log(projects);
  return (
      <div className='mt-3 rounded-md px-4 py-8 animate-fadein'>
        <div className='max-md:text-center flex justify-center items-center'>
          <h2 className="md:text-4xl text-slate-100 text-xl font-bold md:!leading-[50px] mb-2 text-center">
            List of My Projects
          </h2>
        </div>
        <div className='items-center max-w-2xl mx-auto'>
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project}/>
          })}
      </div>
    </div>
  )
}
