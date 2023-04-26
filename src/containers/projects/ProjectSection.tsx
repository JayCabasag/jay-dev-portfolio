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
          <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold px-4 md:px-0'>Projects</h1>
        </div>
        <Link href='https://github.com/JayCabasag' passHref legacyBehavior>
          <a className='ml-4 md:ml-0'>
            All my works can be checked here :
            <span className='text-blue-500 ml-4 md:ml-2'>
              https://github.com/JayCabasag
            </span>
          </a>
        </Link>
        <div className='flex container flex-wrap nowrap'>
          {projects.map((project: Project, index: number) => {
            return <ProjectCard project={project} keyProp={index} key={index}/>
          })}
        </div>
      </div>
  )
}
