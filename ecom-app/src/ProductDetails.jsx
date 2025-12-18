import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/getproduct')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(p => p._id === id);
        setProduct(foundProduct);
      })
      .catch(err => console.error(err));
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

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="pd-container">
      <h2 className="pd-head">{product.name}</h2>
      <img className="pd-img"src={product.image} alt={product.name} />
      <p className="pd-about"><b>About:</b> {product.description}</p>
      <p className="pd-price"><strong>Price:</strong> ₹{product.price}</p>
      <button className="pd-button" onClick={handleAddtoCart}>Add to Cart</button>
      <button className="pd-buy">Buy now</button>
    </div>
  );
}

export default ProductDetails;