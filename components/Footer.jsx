import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='relative w-screen h-screen flex flex-col justify-between bg-yellow-200 px-28 '>
            
            <div className="w-full flex-grow flex items-center justify-center">

            <div className="flex flex-col flex-grow">

                <div className="footer-content flex justify-between mb-24 items-center ">

                    <div className="footer-contact flex flex-col gap-3 text-black">

                        <p className='font-semibold text-xl text-gray-600 mb-4'>SAY HELLO</p>
                        <p className='font-semibold text-xl'>hello@fayazrafeek.com</p>
                        <p className='font-semibold text-xl'>+91 9497521899</p>
                    </div>

                    <div className="footer-nav">
                        <ul className='list-none flex flex-col gap-2 text-gray-800 font-semibold text-xl'>
                            <li className='hover:text-purple-500 cursor-pointer'>
                                Blog
                            </li>
                            <li className='hover:text-purple-500 cursor-pointer'>
                                My Works
                            </li>
                            <li className='hover:text-purple-500 cursor-pointer'>
                                My Resume
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="divider flex-grow border-b-2 border-gray-700 w-full"></div>

                <div className="footer-branding flex justify-between mt-14 items-center ">

                    <div className="logo relative ">
                        <Image 
                            src = '/logo-black.svg' 
                            width='45px'
                            height='45px'
                                />
                        
                    </div>

                    <div className="branding">
                        <ul className='flex gap-4 list-none text-black'>
                            <li className='p-3 hover:bg-purple-400'>
                                <Link href='https://twitter.com/FayazmRafeek' passHref>
                                    <a target='_blank'>
                                    <Image src='/images/twitter.svg' width='37px' height='37px' />
                                    </a>
                                </Link>
                            </li>
                            <li className='p-3 hover:bg-purple-400'>
                                <Link href='https://github.com/FayazRafeek' passHref>
                                    <a target='_blank'>
                                        <Image src='/images/github.png' width='37px' height='37px' />
                                    </a>
                                </Link>
                                
                            </li>
                        </ul>
                    </div>

                </div>

                </div>


            </div>
          <p className=' text-gray-700 text-center mb-5'>Designed and developed with ❤ by Fayaz Rafeek</p>
        </div>
    )
}
