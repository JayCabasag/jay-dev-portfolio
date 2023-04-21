import { ProjectCard } from '@/src/components'
import { Project } from '@/src/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface WorkSectionsProps {
  projects: Project[]
}
export default function WorksSections({ projects }: WorkSectionsProps) {
  const topFourProjects = projects.slice(0, 4)
  const [projectList, setProjectList] = useState<Project[]>(topFourProjects)
  const hasMoreThanFourProjects = projects.length > 4
  return (
    <div className="flex flex-col container">
      <div className='w-full flex items-center justify-center'><h1 className='text-2xl px-4 md:px-0 md:text-5xl font-mono font-extrabold'>Projects</h1> </div>                          
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex items-center">
            <h1 className="text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold px-4 md:px-0">Here are some of my works</h1>
            {
              hasMoreThanFourProjects && (
                <Link href='#' passHref legacyBehavior>
                <a><p className='text-md text-red-500 hover:underline ml-4 font-mono font-bold h-full items-center cursor-pointer transition-colors'>View all</p></a>
              </Link>
              )
            }
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
        </div>
        <div className="container flex flex-wrap -m-4">
        {projectList.map((project: Project, index: number) => {
          return <ProjectCard  project={project} key={index}/>
        })}
        </div>
        </div>
    </div>
  )
}
