import moment from 'moment'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  const dateToCompare = moment('12-09-2022', 'DD-MM-YYYY')
  const monthsDifference = moment().diff(dateToCompare, 'months')
  return (
    <div className="flex flex-col">
      <div className='w-full flex items-center justify-center'><h1 className='text-xl px-4 md:px-0 md:text-5xl font-mono font-extrabold'>About</h1> </div>
      <div className='flex flex-col md:flex-row md:gap-24'>
        <div className='h-[450px] w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0'>
          <h1 className='text-xl text-red-500 font-mono cursor-pointer hover:underline transition-all'>Introduction</h1>
          <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0'>Hi there, </h1>
          <p>I&apos;m <span className='text-red-500 cursor-pointer hover:underline'>Jay A. Cabasag</span>, a front-end developer with a passion for creating beautiful and responsive websites. With {monthsDifference} months of experience under my belt, I am excited to share my portfolio with you to know me better and showcase some of my best work.</p>
        </div>
        <div className='h-[450px] w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0 items-center'>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:gap-24'>
        <div className='h-[450px] w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0 items-center'>

        </div>
        <div className='h-[450px] w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0'>
        <h1 className='text-xl text-red-500 font-mono cursor-pointer hover:underline transition-all'>Technical skills</h1>
          <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0'>I am proficient in a variety of technologies,</h1>
          <p>including <span className='text-red-500 cursor-pointer hover:underline'>HTML</span> , <span className='text-red-500 cursor-pointer hover:underline'>CSS</span>, and <span className='text-red-500 cursor-pointer hover:underline'>JavaScript/TypeScript</span>. Additionally, I am also knowledgeable about different technologies like <span className='text-red-500 cursor-pointer hover:underline'>React js</span>, <span className='text-red-500 cursor-pointer hover:underline'>Next js</span>,<span className='text-red-500 cursor-pointer hover:underline'>Node js</span>, <span className='text-red-500 cursor-pointer hover:underline'>Express js</span>, <span className='text-red-500 cursor-pointer hover:underline'>Java Spring Boot</span> and <span className='text-red-500 cursor-pointer hover:underline'>GoLang</span> which I often use when working on my side projects.For databases, I use <span className='text-red-500 cursor-pointer hover:underline'>MySQL</span>, <span className='text-red-500 cursor-pointer hover:underline'>PostgreSQL</span>, and <span className='text-red-500 cursor-pointer hover:underline'>Firebase</span>. And I also use <span className='text-red-500 cursor-pointer hover:underline'>Design Systems</span> like <span className='text-red-500 cursor-pointer hover:underline'>MUI</span>, <span className='text-red-500 cursor-pointer hover:underline'>Tailwind CSS</span> and <span className='text-red-500 cursor-pointer hover:underline'>SASS</span></p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:gap-24'>
        <div className='h-[450px] w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0'>
          <h1 className='text-xl text-red-500 font-mono cursor-pointer hover:underline transition-all'>Education</h1>
          <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0d'>Bachelors Degree in Computer Science</h1>
          <p>I earned a degree in Computer Science from <span className='text-red-500 cursor-pointer hover:underline'>Taguig City University</span> and have continued to stay up-to-date on the latest front-end development trends and technologies through self-directed learning and attending industry events and workshops.</p>
        </div>    
        <div className='h-[450px] w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0 items-center'>
          <Image
            src='/assets/dev.jpg'
            height={300}
            width={300}
            alt='jay-cabasag'
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:gap-24'>
        <div className='h-[450px] w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0 items-center'>

        </div>
        <div className='h-[450px] w-full md:w-1/2 flex justify-center flex-col p-4 md:p-0'>
        <h1 className='text-xl text-red-500 font-mono cursor-pointer hover:underline transition-all'>Work Experience</h1>
          <h1 className='text-lg sm:text-3xl md:text-4xl title-font mb-2 text-gray-900 font-mono font-bold md:px-0'>I am currently working as a Junior React Engineer</h1>
          <p>My primary responsibility As a <span className='text-red-500 cursor-pointer hover:underline'>Junior React Engineer</span> utilizing <span className='text-red-500 cursor-pointer hover:underline'>Next.js</span>, I am proficient in developing dynamic and performant web applications using the <span className='text-red-500 cursor-pointer hover:underline'>React library </span> and the <span className='text-red-500 cursor-pointer hover:underline'>Next.js framework</span>. I have a solid understanding of <span className='text-red-500 cursor-pointer hover:underline'>React&apos;s core concepts</span>, such as <span className='text-red-500 cursor-pointer hover:underline'>component-based architecture</span> and <span className='text-red-500 cursor-pointer hover:underline'>state management</span>, and can apply these skills to build robust and scalable applications. Additionally, I am familiar with <span className='text-red-500 cursor-pointer hover:underline'>Next.js&apos;s server-side rendering capabilities</span>, which allows me to create fast-loading web pages that are optimized for search engine rankings and user experience. Overall, my expertise in <span className='text-red-500 cursor-pointer hover:underline'>React </span> and <span className='text-red-500 cursor-pointer hover:underline'>Next.js</span> enables me to create high-quality, responsive web applications that meet the needs of businesses and their users.</p>
        </div>
      </div>
    </div>
  )
}
