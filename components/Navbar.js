"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/ui/logo_bg-none.png'
import { motion } from 'framer-motion'
import Contact from './Contact'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {

    const [context, setContext] = useState(false)

    const toAbout = () => {
        const element = document.getElementById('umair');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const handelscreen = () => {
        setContext(true)
    
    
      }
    const handelclose = () => {
        setContext(false)
        // document.body.style.overflow = 'auto'
      
      }

    return (
        <>
            {context && <Contact onClose={handelclose} />}

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex relative flex-wrap justify-evenly md:justify-between z-[100] items-center bg-transparent h-auto min-h-[100px] w-full px-4"
            >

                <Link href={'/'} className='font-brittany text-[55px]  md:text-[80px] font-bold'>
                    Umair  zakria
                </Link>

                <div

                    className=" bg-black dark:bg-[#ffffff3b]  absolute md:fixed -translate-x-1/2 left-1/2 z-[100] w-[100%]  md:w-auto top-[100%] md:top-7 md:rounded-3xl px-4 text-[15px] py-1 flex items-center justify-center gap-4 backdrop-blur-lg bg-opacity-10 ">

                    <button
                        onClick={toAbout}
                        className="px-2 py-2 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
                        href={"/Contact"}
                    >
                        About
                    </button>
                    <Link
                        className="px-2 py-2 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
                        href={"/resume.pdf"}
                    >
                        Resume
                    </Link>
                    <button
                    onClick={handelscreen}
                        className="px-2 py-2 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
                    >
                        Hire me
                    </button>
                </div>

                <div className=" justify-center   flex flex-wrap  items-center ">
                    <Link
                        href={'https://github.com/UmairZakria/'}
                        className=" py-2 transition-all github"
                        target='_blank'


                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="fill-black size-[32px] md:size-[42px] dark:fill-white"

                            x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                    </Link>
                    <Link
                        className="px-4 py-2 transition-all linkedin"
                        href="https://linkedin.com/in/umair-zakria-67477b33a"
                        target='_blank'

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"
                            className="fill-black size-[32px]  md:size-[42px] dark:fill-white"
                        // style={{fill:"#FFFFFF"}}
                        >
                            <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                        </svg>
                    </Link>
                    <div className='flex items-center  justify-center'>

                        <ModeToggle />
                    </div>
                </div>






            </motion.div>
        </>

    )
}

export default Navbar
