import React, { ReactNode } from 'react'
import { Navbar } from '../containers/navbar'
import { Footer } from '../containers/footer'

interface MainLayoutProps {
    children: ReactNode
}
export default function MainLayout({ children }: MainLayoutProps ) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}
