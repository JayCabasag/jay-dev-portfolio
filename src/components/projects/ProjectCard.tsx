import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Project } from '@/src/utils/types'

interface ProjectCardProps {
  project: Project
  keyProp: number
}

function ProjectCard({ project, keyProp }: ProjectCardProps ) {
  const [showInfoPopover, setShowInfoPopover] = useState<boolean>(false)
  const handlePopoverOnMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setShowInfoPopover(true)
  }
  const handlePopoverOnMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setShowInfoPopover(false)
  }
  return (
    <motion.div
      initial={{ x: 100, opacity: 0}}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: keyProp * .2 }}
      viewport={{ once: true }}
      className="xl:w-1/4 md:w-1/2 md:p-4"
    >
              <div className="bg-white hover:shadow-xl shadow-md p-12 md:p-6 rounded-lg w-full">
                <a href={project.url} target='_blank'>
                    <Image className="h-40 rounded w-full object-cover object-center mb-6 cursor-pointer" src={project.image} alt="content" height={500} width={700} />
                </a>
                <div>
                  <div className='flex justify-between items-center'>
                    <h3 className="tracking-widest text-slate-500 text-xs font-medium title-font truncate">{project.subtitle}</h3>
                    <div role='button' onMouseLeave={handlePopoverOnMouseLeave} onMouseEnter={handlePopoverOnMouseEnter} className='h-7 w-7 cursor-pointer text-slate-500 hover:text-red-500 relative'>
                      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                      </svg>
                        <div role="tooltip" className={`${showInfoPopover ? '' : 'invisible opacity-0'} absolute z-10 w-72 -ml-64 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400`}>
                          <div className="p-3 space-y-2">
                          <p><strong>Note:</strong> {project.note}</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <a href={project.url} target='_blank'><h2 className="text-lg text-gray-900 font-medium title-font mb-4 hover:text-red-400 cursor-pointer transition-colors">{project.title}</h2></a>
                <p className="leading-relaxed text-base line-clamp-3 ">{project.description}</p>
              </div>
            </motion.div>
  )
}

export default ProjectCard