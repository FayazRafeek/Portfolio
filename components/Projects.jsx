import React,{useRef} from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Projects() {


    return (
        <div className='relative w-auto pt-20 px-20' >

            <Fade top duration={800}>
                <div className="sub-heading-sub text-sm flex gap-2 text-purple-300">
                    <p>FEATURED PROJECTS </p>
                    <span className='min-w-6 min-h-11 border-b-2 bg-gray-400'></span>   
                </div>    

            </Fade>

            <Fade bottom duration={600} >
                <div className="sub-heading text-4xl font-bold mt-3">
                    Stuff, I've worked on ✨
                    <span className='min-w-6 min-h-11 bg-gray-400'></span>   
                </div>  
            </Fade>


            <div className="project-list-parent">
                
        
                    <div className="project-item o1">

                        <Fade bottom duration={800} delay={300}>
                            <div className="project-image">
                                <Image src='/proj-1.jpeg' layout='fill' />
                            </div>
                        </Fade>
                        <Fade bottom duration={800} delay={600}>
                            <div className="project-content">
                                
                                <div className="title-container">
                                    Student Management

                                </div>

                                <div className="para-container">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto ab dicta, modi minus perferendis tenetur dolore. Quasi, expedita praesentium! Ipsum tempore inventore, itaque eveniet quidem mollitia ut qui enim.</p>
                                </div>

                                <div className="sub-title-container">

                                    React Js . Node Js . AWS . MERN STACK
                                </div>
                            </div>
                        </Fade>
                    </div>

                <div className="project-item o2">

                    <Fade bottom duration={800} >
                        <div className="project-image">
                            <Image src='/proj-1.jpeg' layout='fill' />
                        </div>
                    </Fade>
                    <Fade bottom duration={800} delay={300}>
                        <div className="project-content">
                            
                            <div className="title-container">
                                Student Management

                            </div>

                            <div className="para-container">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto ab dicta, modi minus perferendis tenetur dolore. Quasi, expedita praesentium! Ipsum tempore inventore, itaque eveniet quidem mollitia ut qui enim.</p>
                            </div>

                            <div className="sub-title-container">

                                React Js . Node Js . AWS . MERN STACK
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className="project-item o1">

                    <Fade bottom duration={800}>
                        <div className="project-image">
                            <Image src='/proj-1.jpeg' layout='fill' />
                        </div>
                    </Fade>

                    <Fade bottom duration={800} delay={300}>
                        <div className="project-content">
                            
                            <div className="title-container">
                                Student Management

                            </div>

                            <div className="para-container">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto ab dicta, modi minus perferendis tenetur dolore. Quasi, expedita praesentium! Ipsum tempore inventore, itaque eveniet quidem mollitia ut qui enim.</p>
                            </div>

                            <div className="sub-title-container">

                                React Js . Node Js . AWS . MERN STACK
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>      
        </div>
    )
}
