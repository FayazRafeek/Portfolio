import React,{useRef} from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Blog from '../components/BlogsList'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { fetchBlogLists, fetchProjectLists } from '../lib/DataFetch'

function Home({res}) {

  console.log(res);
  const contactSecRef = useRef(null)
  const blogSecRef = useRef(null)

  const scrollTo = (page) => {
    switch(page) {
      case 'contact' : contactSecRef.current.scrollIntoView(); break;
      case 'blog' : blogSecRef.current.scrollIntoView(); break;
      default : ;
    }
    
  }


  return (
    <>
        <section>
          <Hero scrollTo={scrollTo}/>  
        </section>

        <section ref={blogSecRef}>
          <Blog />  
        </section>

        <section>
          <Projects />  
        </section>

        <section ref={contactSecRef}>
          <Contact />  
        </section>

        <section>
          <Footer />  
        </section>



    </>
  )
}

export async function getStaticProps() {

  const blogResp = await fetchBlogLists()
  const projectResp = await fetchProjectLists()



  return {
    props: {
      
    },
  }
}

export default Home