import { ProjectCard } from '@/src/components/projects'
import { Project } from '@/src/utils/types'
import { motion } from 'framer-motion'
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
    <div className="flex flex-col container items-center justify-center mb-4">
      <div className='w-full flex items-center justify-center'>
        <h1 className='text-2xl px-4 md:px-0 md:text-5xl font-mono font-extrabold'>Projects</h1>
      </div>                          
      <div className="container px-4 md:py-16 mx-auto">
        <div className="flex flex-wrap w-full">
        <motion.div
          initial={{
            opacity: 0,
            x: 100
          }}
          transition={{
            delay: .1
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full mb-6 lg:mb-0 flex items-center"
        >
            <h1 className="text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold px-4 md:px-0">Here are some of my works</h1>
            {
              hasMoreThanFourProjects && (
                <Link href='/projects' passHref legacyBehavior>
                <a><p className='text-md text-red-500 hover:underline ml-4 font-mono font-bold h-full items-center cursor-pointer transition-colors'>View all</p></a>
              </Link>
              )
            }
        </motion.div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
        </div>
        <div className="container flex flex-wrap w-full gap-4 md:gap-0">
        {projectList.map((project: Project, index: number) => {
          return <ProjectCard  project={project} key={index} keyProp={index}/>
        })}
        </div>
        </div>
    </div>
  )
}
