import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {motion} from 'framer-motion'
const Login = () => {
  return (
    <section className='login'>
        <motion.button>
        Login With Google
        <FcGoogle/>
        </motion.button>
    </section>
  )
}

export default Login