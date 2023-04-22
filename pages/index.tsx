import { app, db, firebaseConfig } from "@/firebase/config"
import { AboutSection } from "@/src/containers/about"
import { LandingSection } from "@/src/containers/landing"
import { WorksSections } from "@/src/containers/works"
import { Project } from "@/src/utils/types"
import { getApps, initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects } : HomeProps) {
  const landingSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const worksSectionRef = useRef<HTMLDivElement>(null)
  
  const handleScrollToAbout = () => {
    aboutSectionRef?.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className='h-auto flex justify-center items-center flex-col gap-24'>
      <Head>
        <title>Jay.Dev</title>
        <meta name="description" content="A Jay Cabasag's portfolio site" />
      </Head>
      <section ref={landingSectionRef} className={` transition-opacity flex container h-auto md:h-screen-64 items-center justify-center`}>
        <LandingSection handleScrollToAbout={handleScrollToAbout}/>
      </section>
      <section ref={aboutSectionRef} className={`transition-opacity flex container h-auto items-center justify-center`}>
        <AboutSection />
      </section>
      <section ref={worksSectionRef} className={` transition-opacity flex container h-auto md:min-h-screen-64 items-center justify-center`}>
        <WorksSections projects={projects}/>
      </section>
    </main>
  )
}

export const getStaticProps = async  () => {
  const firestoreDb = !!getApps().length
  ? db
  : getFirestore(initializeApp(firebaseConfig));
  const projectsRef = collection(firestoreDb, "projects");
  const qry = query(projectsRef, orderBy("rank", "asc"));
  const res = await getDocs(qry);
  const projects = res.docs.map(doc => doc.data());
  return {
    props: {
      projects
    },
    revalidate: 60
  }
}
