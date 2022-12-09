import React from 'react'
import { Link } from 'react-router-dom'
const PaymentSucess = () => {
  return (
    <section className='paymentSuccess'>
        <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You smell Wonderful ! Click below to check order status</p>
        <Link to="/myOrders"> Order Status</Link>
        </main>
    </section>
  )
}

export default PaymentSucess