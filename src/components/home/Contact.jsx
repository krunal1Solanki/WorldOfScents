import { MotionConfig } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <section className="contact">
        <motion.form>
            <h1>Contact Us</h1>
            <input type="text" placeholder='name'/>
            <input type="email" placeholder='Email'/>
            <textarea name="text" placeholder='button' cols="30" rows="10"></textarea>
            <button type='submit'>Submit</button>
        </motion.form>

    </section>
  )
}

export default Contact