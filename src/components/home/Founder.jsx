import { motion } from 'framer-motion'
import React from 'react'
import Menu from './Menu'
const Founder = () => {
  return (
    <>
    <section className='founder'>
        <motion.div>
            <h3> Hi i am, Krunal Solanki founder of World Of Scents</h3>
            <br />
            <p> Want something fresh and new? A perfume is the best way to do that.</p>
        </motion.div>
    </section>
    <Menu />
    </>   
    )
}

export default Founder