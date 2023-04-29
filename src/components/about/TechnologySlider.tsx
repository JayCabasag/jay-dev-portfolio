import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper";
import React from 'react'
import Image from "next/image";

interface TechAsset {
  name: string
  description: string
  url: string
}

export default function TechnologySlider() {
  const techAssets:TechAsset[] = [
    {
      name: 'JavaScript',
      description: 'JavaScript is a high-level programming language that is commonly used to create interactive effects within web browsers.',
      url: '/assets/js.png'
    },
    {
      name: 'Java',
      description: 'Java is a popular programming language that is used to build a wide range of applications. It is known for its "write once, run anywhere" philosophy, which means that code written in Java can run on any platform that supports it.',
      url: '/assets/java.png'
    },
    {
      name: 'Golang',
      description: 'Go, also known as Golang, is a programming language developed by Google. It is designed to be efficient and easy to read, making it a popular choice for building large-scale web applications and backend systems.',
      url: '/assets/go.png'
    },
    {
      name: 'Node.js',
      description: 'Node.js is a server-side runtime environment that allows developers to run JavaScript code outside of a web browser.',
      url: '/assets/nodejs.png'
    },
    {
      name: 'Next.js',
      description: 'Next.js is a React-based web framework that allows developers to build static and dynamic websites with ease.',
      url: '/assets/Nextjs.png'
    },
    {
      name: 'React.js',
      description: 'React is a JavaScript library for building user interfaces. It is known for its component-based architecture and declarative programming style, which make it easy to build complex UIs.',
      url: '/assets/react.png'
    },
    {
      name: 'Firebase',
      description: 'Firebase is a cloud-based platform for building web and mobile applications. It provides a range of services, including authentication, real-time database, hosting, and storage, making it easy for developers to build and deploy applications without needing to manage servers.',
      url: '/assets/firebase.png'
    },
    {
      name: 'Tailwind CSS',
      description: 'Tailwind CSS is a utility-first CSS framework that allows developers to quickly and easily build custom designs.',
      url: '/assets/tailwind.png'
    },
    {
      name: 'TypeScript', 
      description: 'TypeScript is a strongly typed superset of JavaScript, designed to make large-scale JavaScript projects more maintainable and easier to scale.', 
      url: '/assets/typescript.png'
    }
    ]

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      autoplay={{
        delay: 2000
      }}
      creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
      }}
      modules={[EffectCreative, Autoplay]}
      className="mySwiper"
    >
      {techAssets.map((techAsset: TechAsset, index: number) => {
        return <SwiperSlide key={index} className="bg-gradient-to-t from-slate-100 to-slate-100">
            <div>
              <Image
                src={techAsset.url}
                alt={`${techAsset.name}'-'${index}`}
                height={150}
                width={150}
              />
              <h1 className="text-slate-950">{techAsset.name}</h1>
              <summary>
                <p className="text-slate-950 text-sm font-thin">{techAsset.description}</p>
              </summary>
            </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}


