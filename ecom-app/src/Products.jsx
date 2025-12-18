import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Products.css'

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/getproduct')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="product-head">Products</h2>
      <div className="product-container">
        {products.map(product => (
          <Link className="product-link" key={product._id} to={`/product/${product._id}`}>
            <div className="product">
              <img src={product.image} alt={product.name} />
              <h4 className="product-title">{product.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;