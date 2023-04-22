import React from 'react'
import { firebaseConfig } from '@/firebase/config';
import { db } from '@/firebase/config';
import { BlogCard } from '@/src/components/blogs';
import { getApps, initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Blog } from '@/src/utils/types';
import Head from 'next/head';
import { BlogSection } from '@/src/containers/blogs';

interface BlogPageProps {
  blogs: Blog[]
}

export default function BlogsPage({ blogs } : BlogPageProps) {
  return (
    <main className='h-auto min-h-screen md:h-screen-64 flex justify-center'>
      <Head>
        <title>Jay.Dev</title>
        <meta name="description" content="A Jay Cabasag's portfolio site" />
      </Head>
      <BlogSection blogs={blogs}/>
    </main>
  )
}

export const getStaticProps = async  () => {
  const firestoreDb = !!getApps().length
  ? db
  : getFirestore(initializeApp(firebaseConfig));
  const res = await getDocs(collection(firestoreDb, "blogs"))
  const blogs = await res.docs.map(doc => { 
    return {id: doc.id, ...doc.data()}
  })
  return {
    props: {
      blogs
    },
    revalidate: 60
  }
}


