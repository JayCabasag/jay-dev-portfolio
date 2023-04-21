import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Navbar() {
  const [expandMobileMenu, setExpandMobileMenu] = useState<boolean>(false)
  const router = useRouter()
  const isRootPage = router.asPath === '/'
  const isProjectsPage = router.asPath === '/projects'
  const isBlogsPage = router.asPath === '/blogs'

  const handleToggleMobileMenu = () => {
    setExpandMobileMenu(!expandMobileMenu)
  }

  return (
    <nav className='bg-white h-16 shadow-xs w-full flex justify-center sticky top-0 shadow-sm z-20'>
      <div className='container flex justify-between items-center px-4 md:px-0'>
        <div className='flex gap-4 md:gap-16'>
        <h1 className='leading-5 text-lg font-bold flex items-center'>JAY.DEV</h1>
          <button className='w-7 h-7 flex md:hidden' onClick={handleToggleMobileMenu}>
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
            </svg>
          </button>
          <ul
            className={`${expandMobileMenu ? '' : 'hidden' } md:flex absolute md:relative -mt-6 md:mt-0 pt-10 md:pt-0 left-0 h-screen md:h-auto w-screen md:w-auto flex-col md:flex-row pl-5 md:pl-0 flex bg-white gap-4 text-md font-medium`}>
            <li className=' cursor-pointer hover:underline hover:text-red-500 transition-all md:hidden absolute right-4 top-4'>
            <button className='h-7 w-7' onClick={handleToggleMobileMenu}>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            </li>
            <li className={`${isRootPage ? 'text-red-500 underline ': '' } cursor-pointer hover:underline hover:text-red-500 transition-all`}>
              <Link href='/' passHref legacyBehavior>
                <a  onClick={handleToggleMobileMenu}>Home</a>
              </Link>
            </li>
            <li className={`${isProjectsPage ? 'text-red-500 underline ': '' } cursor-pointer hover:underline hover:text-red-500 transition-all`}>
              <Link href='/projects' passHref legacyBehavior>
                <a  onClick={handleToggleMobileMenu}>Projects</a>
              </Link>
            </li>
            <li className={`${isBlogsPage ? 'text-red-500 underline ': '' } cursor-pointer hover:underline hover:text-red-500 transition-all`}>
              <Link href='/blogs' passHref legacyBehavior>
                <a onClick={handleToggleMobileMenu}>Blogs</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href='/contact' passHref legacyBehavior>
          <a>
            <button className='leading-5 text-sm font-bold flex items-center h-10 px-4 uppercase hover:bg-red-600 bg-red-500 text-white rounded'>Contact me</button>
          </a>
        </Link>
      </div>
    </nav>
  )
}
