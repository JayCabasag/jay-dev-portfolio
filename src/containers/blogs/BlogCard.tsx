import { Blog } from '@/src/utils/types'
import Link from 'next/link'
import React from 'react'

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.id}`} passHref legacyBehavior>
      <a className="block m-2 w-full md:max-w-[360px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{blog.title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-5">{blog.description}</p>
      </a>
    </Link>
  )
}
