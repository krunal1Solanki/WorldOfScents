import React from 'react'

const ConfirmOrder = () => {
  return (
    <section className='confirmOrder'>
        <main>
            <h1>CONFIRM ORDER</h1>
            <form>
                <div>
                    <label> Cash On Delivery</label>
                    <input type="radio" name="payment"/>
                </div>
                
                <div>
                    <label> Online</label>
                    <input type="radio" name="payment"/>
                </div>

                <button>Pay Now</button>
            </form>
        </main>
    </section>
  )
}

export default ConfirmOrder