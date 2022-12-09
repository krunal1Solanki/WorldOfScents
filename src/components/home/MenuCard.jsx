import React from 'react'
import {motion} from 'framer-motion' 
const MenuCard = ( {itemNum, perfumeSrc, price, title, handler }) => {
  return (
    <motion.div initial={{x : "-100%"}} whileInView={{x : 0}} className='MenuCard'> 
    <div>Scent : {itemNum} </div>
    <main>
      <img src={perfumeSrc} alt="Wonderful Perfume" />
      <h5>₹{price}</h5>
      <p>{title}</p>
      <button onClick ={() => handler()}>Buy Now</button>
    </main>
    </motion.div>
    )
}

export default MenuCard