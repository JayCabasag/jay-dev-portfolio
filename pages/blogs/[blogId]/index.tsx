import { db, firebaseConfig } from '@/firebase/config';
import { Blog } from '@/src/utils/types';
import { getApps, initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

interface BlogPage {
  blog: Blog
}

export default function BlogPage({ blog } : BlogPage) {
  const hasIdea = (blog?.idea?.length as number) ?? 0 > 0
  return (
    <main className='h-auto min-h-screen md:h-screen-64 flex justify-center'>
      <Head>
        <title>Jay.Dev</title>
        <meta name="description" content="A Jay Cabasag's portfolio site" />
      </Head>
      <div className='container '>
        <div className='w-full mt-4'>
        <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0 px-2'>{blog.title}</h1>
        </div>
        <div className='flex gap-4 container flex-row'>
          <p className='p-4 md:p-0'>{blog.description}</p>
        </div>
        <div className='p-4 flex gap-4 container items-center justify-center pt-6'>
          <Image
            src={blog.image}
            height={500}
            width={1200}
            alt={blog.slug}
          />
        </div>
        {hasIdea && (
           <div className='flex gap-4 container flex-row'>
            <p className='p-4 md:p-0'><span className='text-red-500 font-bold'>IDEA:</span> {blog.idea} </p>
          </div>
        )}
      </div>
    </main>
  )
}

export async function getStaticPaths() {
    const firestoreDb = !!getApps().length
    ? db
    : getFirestore(initializeApp(firebaseConfig));
    const res = await getDocs(collection(firestoreDb, "blogs"))
    const blogs = await res.docs.map(doc => {
      return { id: doc.id, ...doc.data()} as Blog
    })
    const params = blogs.map((blog) => {
        return { params: { blogId: blog.id } }
    })
    return {
      paths: params,
      fallback: false, // can also be true or 'blocking'
    }
  }

  export async function getStaticProps(context: GetStaticPropsContext) {
    const blogId = context?.params?.blogId as string
    if (!blogId) {
      return {
        redirect: {
          destination: '/blogs'
        }
      }
    }
    const docRef = doc(db, "blogs", blogId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const blog = docSnap.data();
      return {
        props: {
          blog
        },
      }
    } else {
      return {
        notFound: true,
      }
    }
  }