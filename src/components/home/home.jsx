import React from 'react'
import {motion} from "framer-motion"
import Founder from './Founder'
import img from '../../assets/perfume1.jpg'
const home = () => {
  return (
    <>
    <section className="homee">
        <div>
            <motion.h1 initial={{x : "-100%"}} whileInView={{x : 0}}>World Of Scents</motion.h1>
            <motion.p initial={{x : "-100%"}} whileInView={{x : 0}}>Fragrance makes us dream!</motion.p>
          <img src={img}/>
        </div>
        <a href="#menu">Explore Scents</a>
    </section>
    <Founder />
    </>
  )
}

export default home