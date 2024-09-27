import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/cart')
            .then(response => setCart(response.data))
            .catch(error => console.error(error));
    }, []);

    const removeFromCart = (id) => {
        axios.delete(`http://localhost:3500/cart/${id}`)
            .then(() => setCart(cart.filter(item => item.id !== id)))
            .catch(error => console.error(error));
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="container">
            <h2>Your Cart</h2>
            <ul className="list-group">
                {cart.map(item => (
                    <li key={item.id} className="list-group-item">
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm float-right">Remove</button>
                    </li>
                ))}
            </ul>
            <h4>Total: ${total}</h4>
        </div>
    );
}

export default Cart;
