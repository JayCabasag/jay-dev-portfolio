import Image from 'next/image'
import { motion } from 'framer-motion'
interface LandingSectionProps {
  handleScrollToAbout: () => void
}
export default function LandingSection({ handleScrollToAbout } : LandingSectionProps) {
  return (
    <div className='flex flex-col md:flex-row w-full items-center'>
      <motion.div
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: .2 }}
        className='h-screen-64 w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0'
      >
        <h1 className='text-xl'>Software Engineer</h1>
        <h1 className='text-5xl font-mono font-extrabold'>Jay Cabasag</h1>
        <p>As a software engineer, I am constantly learning and staying up-to-date with the latest technologies and programming languages. This allows me to develop innovative solutions and improve the performance and functionality of the software I create.</p>
        <button
          className='max-w-max mt-6 border px-4 py-2 rounded-md font-bold text-red-500 border-red-500 hover:text-white hover:bg-red-500'
          onClick={() => handleScrollToAbout()}
        >
          Get to know me
        </button>
      </motion.div>
       <motion.div
         className='h-screen-64 w-full md:w-1/2 flex items-center justify-center'
         initial={{ opacity: 0}}
         animate={{ opacity: 1 }}
         transition={{ delay: .5 }}
        >
        <Image 
          src='/assets/main-img.png'
          height={750}
          width={750}
          alt='main'
        />
      </motion.div>
    </div>
  )
}
