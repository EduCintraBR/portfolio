"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
import DownloadCVButton from './downloadCvBtn'

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.2
                    }}
                >
                    <Image 
                    src='/profile_picture.jpg' 
                    alt='Eduardo Portrait'
                    width='192'
                    height='192'
                    quality='95'
                    priority={true}
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem]
                    border-white shadow-xl'
                    />
                </motion.div>
                
                <motion.span className='absolute bottom-0 right-0 text-4xl'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                    }}
                >👋</motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 bt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className='font-bold'>Hello I&apos;m Eduardo.</span> I&apos;m a{" "}
            <span className='font-bold'>full-stack developer</span> with{" "}
            <span className='font-bold'>6+ years</span> of experience. I enjoy building 
            <span className='italic'> sites & apps</span>. My focus is{" "} 
            <span className='underline'>.NET and Angular(Typescript)</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                delay: 0.25
             }}
        >
            <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
                rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                onClick={() => {
                    setActiveSection("Contact")
                    setTimeOfLastClick(Date.now())
                }}
            >
                Contact me here <BsArrowRight 
                className='opacity-60 grooup-hover:translate-x-1 transition'/>
            </Link>
            
            <DownloadCVButton />

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60'
            href='https://www.linkedin.com/in/educintrabr/' target='_blank'>
                <BsLinkedin/>
            </a>
            
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full 
            outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack  dark:bg-white/10 dark:text-white/60'
            href='https://github.com/EduCintraBR' target='_blank'>
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}
