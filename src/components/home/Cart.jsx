import React from 'react'
import { Link } from 'react-router-dom'
import perfume1 from "../../assets/perfume1.jpg";
import perfume2 from "../../assets/perfume2.jpg";
import perfume3 from "../../assets/perfume3.jpg";



const CartItem = ({val, title, img, inc, dec}) => {
    console.log(val);
    return (
        <div className='cartItem'>
            <div> 
                <h4>{title}</h4>
                <img src={img} />
            </div>
            
            <div>
                <button onClick={dec}>-</button>
            
                <input type="number" readOnly value ={val}/>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}
const Cart = () => {
  const inc= (item)=> {
  }
  const dec = (item)=> {
  }
    return (
    <section className='cart'>
        <main>
            <CartItem 
                title = "Clive Christian 1872 Perfume"
                img = {perfume1}
                val = {0}
                inc = {() => inc(1)}
                dec ={() => dec(1)}
            />
            
            <CartItem 
                title = "Xerjoff Lvory Route perfume"
                img = {perfume2}
                val = {0}
                inc = {() => inc(2)}
                dec ={() => dec(2)}
            />

           
            <CartItem 
                title = "Bella Vita Luxury Perfume"
                img = {perfume3}
                val = {0}
                inc = {() => inc(3)}
                dec ={() => dec(3)}
            /> 
            <article>

                <div>
                    <h4>Sub Total</h4>
                    <p>₹{3000}</p>
                </div>
                
                <div>
                    <h4>Tax</h4>
                    <p>₹{3000 * 0.18}</p>
                    
                </div>
                <div>
                    <h4>Shipping Charges</h4>
                    <p>₹{200}</p>
                </div>
                <div>
                    <h4>Total</h4>
                    <p>₹{3000 + 200 + 3000*0.18}</p>
                </div>
                <Link to="/shipping" >Checkout</Link>
                
            </article>
        </main>
    </section>
  )
}

export default Cart