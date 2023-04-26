import { Blog } from '@/src/utils/types'
import Link from 'next/link'
import { motion } from 'framer-motion'
interface BlogCardProps {
  blog: Blog,
  keyProp: number
}

export default function BlogCard({ blog, keyProp }: BlogCardProps) {
  return (
    <>
      <motion.div
        initial={{ x:100, opacity: 0}}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: keyProp * .2 }}
        viewport={{ once: true }}
        className='block m-2 w-full md:w-1/4 md:max-w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      >
        <Link href={`/blogs/${blog.id}`} passHref legacyBehavior>
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{blog.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-5">{blog.description}</p>
          </a>
        </Link>
      </motion.div>
    </>
  )
}
