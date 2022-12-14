import React from 'react'
import {GiPerfumeBottle} from 'react-icons/gi'
import {FiShoppingCart, FiLogIn} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const header = (isAuthenticated = true) => {
  return (
    <nav>
        <motion.div initial={{x : "-100%"}} whileInView={{x : 0}} >
            <GiPerfumeBottle />
        </motion.div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/cart"><FiShoppingCart /></Link>
            <Link to={isAuthenticated ? "/me" : "/login"}>
                {isAuthenticated  ? <FaUser /> : <FiLogIn />}
            </Link>
        </div>
    </nav>
  )
}

export default header