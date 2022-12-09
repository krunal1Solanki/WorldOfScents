import React from 'react'
import { Link } from 'react-router-dom'
import me from '../../assets/burger1.png'
import {MdDashboard} from 'react-icons/md'
const Profile = () => {
  
    return (
    <section className='profile'>
        <main>
            <img src={me} alt="User"/> 
            <h5>
                Krunal
            </h5>
            <div>
                <Link to="/admin/dashboard"><MdDashboard/> Dashboard</Link> 
            </div>
            <div>
                <Link to="/myOrders">My Orders</Link> 
            </div>
            <div>
                <Link to="/logout">Logout</Link> 
            </div>
        </main>
    </section>
  )
}

export default Profile