import { ProjectCard } from '@/src/components/projects'
import { Project } from '@/src/utils/types'
import Link from 'next/link'
import React from 'react'

interface ProjectSectionsProps {
    projects: Project[]
}

export default function ProjectSection({ projects }: ProjectSectionsProps) {
  return (
    <div className='container '>
        <div className='w-full mt-4'>
          <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0'>Projects</h1>
        </div>
        <Link href='https://github.com/JayCabasag' passHref legacyBehavior>
          <a className='text-blue-500'>
           https://github.com/JayCabasag
          </a>
        </Link>
        <div className='flex container flex-wrap nowrap'>
          {projects.map((project: Project, index: number) => {
            return <ProjectCard project={project} key={index}/>
          })}
        </div>
      </div>
  )
}
