import React from 'react'
import { firebaseConfig } from '@/firebase/config';
import { db } from '@/firebase/config';
import { BlogCard } from '@/src/containers/blogs'
import { getApps, initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Blog } from '@/src/utils/types';
import Head from 'next/head';

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
      <div className='container '>
        <div className='w-full mt-4'>
        <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0 px-2'>Topics</h1>
        </div>
        <div className='flex gap-4 container flex-wrap nowrap'>
          {blogs.map((blog: Blog, index: number) => {
            return <BlogCard blog={blog} key={index}/>
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


