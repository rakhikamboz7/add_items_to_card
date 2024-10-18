import React, { useEffect, useState } from 'react';

const ProductList = ({ addToCart, query }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products'); // Example API
            const data = await response.json();
            setProducts(data.products);
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <div key={product.id} className="product">
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: £{product.price}</p>
                    <p>Rating: {product.rating} ⭐</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
