import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
    <div>
        <h2> World Of Scents</h2>
        <p>No elegance is possible without perfume. It is the unseen, unforgettable, ultimate accessory</p>
        <br />
        <em>All your suggestions are needed</em>
        <strong> All right recieved @WorldOfScents</strong>
    </div>
    <aside>
        <h4>Follow Us</h4>
        <a href="https://instagram.com"><AiFillInstagram /></a>
        <a href="https://instagram.com"><AiFillGithub/></a>
        <a href="https://instagram.com"><AiFillLinkedin/></a>
    </aside>
    </footer>
)
}

export default Footer