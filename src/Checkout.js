import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket,user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
s                <div className="checkout__title">
                <strong c>Shopping Cart</strong>
                <h3>{user?.email}</h3>
                </div>
            </div>
            <div className="checkout__rightAd">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                alt="AD" />
            </div>
            <div className="checkout__title">
                {basket.map(item=>
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />)}
            </div>
            <div className="checkout__subtotal">
                <Subtotal />
                
            </div>
        </div>
    )
}

export default Checkout
