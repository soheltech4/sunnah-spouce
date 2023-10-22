import React from 'react';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {
    const [cart, refetch] = useCart()
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum , 0)
    return (
        <div>
            <p>{total}</p>
        </div>
    );
};

export default MyCart;