import React from 'react'
import MenuCard from './MenuCard';
import perfume1 from "../../assets/perfume1.jpg";
import perfume2 from "../../assets/perfume2.jpg";
import perfume3 from "../../assets/perfume3.jpg";
const Menu = () => {
    const addToCart = (itemNum) => {

    }
    return (
        <section id='menu'>
            <h1>SCENTS</h1>
            <div>
                <MenuCard
                    itemNum={1}
                    perfumeSrc={perfume1}
                    price={96000}
                    title="Clive Christian 1872 Perfume" 
                    handler={addToCart}
                 /> 
        
                <MenuCard
                    itemNum={2}
                    perfumeSrc={perfume2}
                    price={74200}
                    title="Xerjoff Lvory Route perfume" 
                    handler={addToCart}
                 />
                 
                <MenuCard
                    itemNum={1}
                    perfumeSrc={perfume3}
                    price={8000}
                    title="Bella Vita Luxury Perfume"  
                    handler={addToCart}
                 />
            </div>
        </section>
    );
};
    
export default Menu