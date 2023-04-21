import { db, firebaseConfig } from '@/firebase/config'
import { ProjectCard } from '@/src/components'
import { Project } from '@/src/utils/types'
import { getApps, initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

interface ProjectPageProps {
  projects: Project[]
}

export default function ProjectsPage({ projects }: ProjectPageProps) {
  return (
    <main className='h-auto min-h-screen md:h-screen-64 flex justify-center'>
      <Head>
        <title>Jay.Dev</title>
        <meta name="description" content="A Jay Cabasag's portfolio site" />
      </Head>
      <div className='container '>
        <div className='w-full mt-4'>
          <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0'>Projects</h1>
        </div>
        <Link href='https://github.com/JayCabasag' passHref legacyBehavior>
          <a className='text-blue-500'>
           https://github.com/JayCabasag
          </a>
        </Link>
        <div className='flex gap-4 container flex-wrap nowrap'>
          {projects.map((project: Project, index: number) => {
            return <ProjectCard project={project} key={index}/>
          })}
        </div>
      </div>
    </main>
  )
}

export const getStaticProps = async  () => {
  const firestoreDb = !!getApps().length
  ? db
  : getFirestore(initializeApp(firebaseConfig));
  const res = await getDocs(collection(firestoreDb, "projects"))
  const projects = await res.docs.map(doc => doc.data())
  return {
    props: {
      projects
    }
  }
}

