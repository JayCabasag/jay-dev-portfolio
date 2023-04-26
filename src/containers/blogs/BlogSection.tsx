import { BlogCard } from '@/src/components/blogs'
import { Blog } from '@/src/utils/types'
import React from 'react'

interface BlogSectionProps {
    blogs: Blog[]
}

export default function BlogSection({ blogs } : BlogSectionProps) {
  return (
    <div className='container '>
        <div className='w-full mt-4'>
        <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0 px-2'>Topics</h1>
        </div>
        <div className='flex container flex-wrap nowrap gap-4 '>
          {blogs.map((blog: Blog, index: number) => {
            return <BlogCard blog={blog} keyProp={index} key={index}/>
          })}
        </div>
      </div>
  )
}
