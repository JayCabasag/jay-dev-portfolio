import React, { ReactNode } from 'react'
import { Navbar } from '../containers/navbar'
import { Footer } from '../containers/footer'

interface MainLayoutProps {
    children: ReactNode
}
export default function MainLayout({ children }: MainLayoutProps ) {
  return (
    <div className='bg-gradient-to-r from-slate-100 to-pink-50'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
