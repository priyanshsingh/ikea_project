import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetails({ match }) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3500/products/${match.params.id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [match.params.id]);

    return (
        <div className="container">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default ProductDetails;
