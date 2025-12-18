import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Product not found');
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddtoCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find(item => item._id == product._id);

    if(existingItem) {
    existingItem.quantity += 1;
  } else {
    existingCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
  alert("Added to cart")
  };

  if (loading) {
    return <div className="product-details"><h2>Loading...</h2></div>;
  }

  if (error) {
    return <div className="product-details"><h2>Error: {error}</h2></div>;
  }

  if (!product) {
    return <div className="product-details"><h2>Product not found!</h2></div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p><strong>Description:</strong> {product.description}</p>
      <p className="price"><strong>Price:</strong> ₹{product.price}</p>
      {product.category && <p><strong>Category:</strong> {product.category}</p>}
      {product.stock !== undefined && <p><strong>Stock:</strong> {product.stock} available</p>}
      <div className="buttons">
        <button className="cart-btn" onClick={handleAddtoCart}>Add to Cart</button>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;