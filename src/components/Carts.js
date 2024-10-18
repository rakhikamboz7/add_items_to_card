import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <h4>{item.title}</h4>
                    <p>Price: £{item.price}</p>
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        min="1"
                    />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <h3>Total Price: £{totalPrice}</h3>
        </div>
    );
};

export default Cart;
