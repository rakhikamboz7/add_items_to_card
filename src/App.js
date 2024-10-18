import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Carts';
import SearchBar from './components/SearchBar';
import './styles/style.css'; // Import the styles here

const App = () => {
    const [cart, setCart] = useState([]);
    const [query, setQuery] = useState('');
    const [notification, setNotification] = useState('');

    const addToCart = (product) => {
        setCart((currentCart) => {
            const itemInCart = currentCart.find((item) => item.id === product.id);
            if (itemInCart) {
                return currentCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            setNotification(`Added ${product.title} to the cart!`);
            setTimeout(() => setNotification(''), 3000);
            return [...currentCart, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart((currentCart) =>
            currentCart.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const removeFromCart = (id) => {
        setCart((currentCart) => currentCart.filter((item) => item.id !== id));
    };

    return (
        <div className="app">
            <SearchBar query={query} setQuery={setQuery} />
            {notification && <div className="notification">{notification}</div>}
            <ProductList addToCart={addToCart} query={query} />
            <Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        </div>
    ); 
};

export default App;
