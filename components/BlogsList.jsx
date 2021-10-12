import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'


export default function BlogsList() {
    return (
        <div className='relative w-screen h-screen  pt-16 px-20 overflow-hidden flex flex-col'>
            
            <div className="">

                <Fade top duration={800}>
                    <div className="sub-heading-sub text-sm flex gap-2 text-purple-300">
                        <p>BLOG ARTICLES</p>
                        <span className='min-w-6 min-h-11 border-b-2 bg-gray-400'></span>   
                    </div>    
                </Fade>

                <Fade top duration={800} delay={100}>
                    <div className="sub-heading text-4xl font-bold mt-3">
                        Latest Posts ✒️
                        <span className='min-w-6 min-h-11 bg-gray-400'></span>   
                    </div>  
                </Fade>

            </div>

            <div className="blog-list-container no-scroll-bar">
            
                <Fade bottom duration={800} delay={200}>

                    <div className="blog-item">

                        <div className="image-parent">

                        <Image src='/proj-1.jpeg' layout='fill' />
                        </div>

                        <div className="content">

                            <div className="date">21/03/2021</div>
                            <div className="title">
                                Why should you use static site generator
                            </div>
                            <div className="tags">Tags : Frontent, ReactJs, Javascript</div>

                        </div>
                    </div>
                </Fade>
            
                <Fade bottom duration={800} delay={300}>
                <div className="blog-item">

                    <div className="image-parent">

                        <Image src='/proj-1.jpeg' layout='fill' />

                    </div>

                    <div className="content">

                        <div className="date">21/03/2021</div>
                        <div className="title">
                            Why should you use static site generator
                        </div>
                        <div className="tags">Tags : Frontent, ReactJs, Javascript</div>

                    </div>
                </div>
                </Fade>

                <Fade bottom duration={800} delay={350}>
                    <div className="blog-item">

                        <div className="image-parent">

                            <Image src='/proj-1.jpeg' layout='fill' />

                        </div>

                        <div className="content">

                            <div className="date">21/03/2021</div>
                            <div className="title">
                                Why should you use static site generator
                            </div>
                            <div className="tags">Tags : Frontent, ReactJs, Javascript</div>

                        </div>
                    </div>
                </Fade>

                <Fade bottom duration={800} delay={400}>
                    <div className="blog-item">

                        <div className="image-parent">

                            <Image src='/proj-1.jpeg' layout='fill' />

                        </div>

                        <div className="content">

                            <div className="date">21/03/2021</div>
                            <div className="title">
                                Why should you use static site generator
                            </div>
                            <div className="tags">Tags : Frontent, ReactJs, Javascript</div>

                        </div>
                    </div>
                </Fade>

                     
            </div>  
        </div>

    )
}
