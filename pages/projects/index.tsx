import { db, firebaseConfig } from '@/firebase/config'
import { ProjectCard } from '@/src/components'
import { ProjectSection } from '@/src/containers/projects'
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
      <ProjectSection projects={projects} />
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
    },
    revalidate: 60
  }
}

