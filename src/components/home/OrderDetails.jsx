import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"aa sdd 22"}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Krunal"}
                </p>
                <p>
                    <b>Phone</b>
                    {55454344}
                </p>
            </div>
            
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processsing"}
                </p>
                <p>
                    <b>Placed On</b>
                    {"31-02-2022"}
                </p>
                <p>
                    <b>Delivered On</b>
                    {"31-02-2022"}
                </p>
            </div>

            
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Mode</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    {"ddifjodjvd"}
                </p>
                <p>
                    <b>Paid On</b>
                    {"31-02-2022"}
                </p>
            </div>

            
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    {32323}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    {200}
                </p>
                <p>
                    <b>Tax</b>
                    {343}
                </p>
                <p>
                    <b>Total</b>
                    {3433232}
                </p>
            </div>

            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Clive Christian 1872 Perfume</h4>
                    <div>
                    <span>{12}</span>
                    <span> x {232}</span>
                    </div>
                </div>

                <div>
                    <h4>Xerjoff Lvory Route perfume</h4>
                    <div>
                    <span>{19}</span>
                    <span> x {23}</span>
                    </div>
                </div>

                <div>
                    <h4>Bella Vita Luxury Perfume</h4>
                    <div>
                    <span>{300}</span>
                    <span> x {232}</span>
                    </div>
                </div>

                <div>
                    <h3>Sub Total</h3>
                    <div>{34343}</div>
                </div>
            </article>
        </main>
    </section>
  )
}

export default OrderDetails