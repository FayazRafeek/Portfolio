import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


export default function Hero({scrollTo}) {


    return (
        <section className='relative w-screen h-screen pt-5 px-10 flex flex-col'>
            
        

                <div className='flex justify-between py-3 items-center z-10'>

                    <Fade duration={600} delay={2000} top>

                    <div className="hero-logo relative">

                        <Image
                            src='/logo.svg'
                            alt='F.'
                            layout='fill'
                        />

                    </div>
                    </Fade>

                    <div className="nav-list">

                        <Fade duration={600} delay={2000} top>

                        <ul className='list-none flex gap-4 items-center'>
                            <li >Blog</li>
                            <li>About</li>
                            <li onClick={() => scrollTo('contact')}>Contact</li>
                            <li className='resume-btn ml-2 px-4 py-2 border-2 border-gray-400 hover:border-purple-400'>
                                <Link href='https://docs.google.com/spreadsheets/d/1SPSerBuDKCSV8DgwoezPxfPnSYxx-DTuXp2qvdcXs-8/edit?usp=sharing' passHref={true}>
                                    <a target='_blank'>Resume</a>
                                </Link>
                                </li>
                        </ul>
                        </Fade>
                    </div>

                </div>
        

            <div className="absolute  bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 flex justify-center self-center ">

                <Fade duration={800} >

                <div className="flex flex-col ">

                    <div className="text-2xl text-gray-300">
                        Hello 👋
                    </div>

                    <div className="hero-text text-8xl font-bold">
                        I'm Fayaz Rafeek
                    </div>

                    <div className="text-3xl font-medium pb-20 text-gray-200" style={{fontFamily:'Quicksand'}}>
                        Frontend Developer / UI Designer
                    </div>

                </div>
                </Fade>
            </div>

            <Fade duration={600} delay={2000} bottom>

                <div onClick={() => scrollTo('blog')} className="absolute bottom-0 text-gray-400 pb-6 animate-bounce w-full flex justify-center items-center gap-2 cursor-pointer">

                    Scroll Down

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                </div>
            </Fade>
        </section>
    )
}
