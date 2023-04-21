import { app, db, firebaseConfig } from "@/firebase/config"
import { AboutSection } from "@/src/containers/about"
import { LandingSection } from "@/src/containers/landing"
import { WorksSections } from "@/src/containers/works"
import { Project } from "@/src/utils/types"
import { getApps, initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects } : HomeProps) {
  const [visibleSection, setVisibleSection] = useState<string>('')
  const landingSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const worksSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const landingObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting || entries[0].intersectionRatio === 0){
        setVisibleSection('landing-section')
      }
    })
    landingObserver.observe(landingSectionRef.current!)
    
    const aboutObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting || entries[0].intersectionRatio === 0){
        setVisibleSection('about-section')
      }
    })
    aboutObserver.observe(aboutSectionRef.current!)
    
    const worksObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting || entries[0].intersectionRatio === 0){
        setVisibleSection('works-section')
      }
    })
    worksObserver.observe(worksSectionRef.current!)
  
    return () => {
      landingObserver.disconnect()
      aboutObserver.disconnect()
      worksObserver.disconnect()
    }
  }, [])


  return (
    <main className='h-auto flex justify-center items-center flex-col gap-24'>
      <Head>
        <title>Jay.Dev</title>
        <meta name="description" content="A Jay Cabasag's portfolio site" />
      </Head>
      <section ref={landingSectionRef} className={` transition-opacity flex container h-auto md:h-screen-64 items-center justify-center`}>
        <LandingSection />
      </section>
      <section ref={aboutSectionRef} className={`transition-opacity flex container h-auto items-center justify-center`}>
        <AboutSection />
      </section>
      <section ref={worksSectionRef} className={` transition-opacity flex container h-auto md:h-screen-64 items-center justify-center`}>
        <WorksSections projects={projects}/>
      </section>
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
