import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    stock: '',
    category: ''
  });

  const fetchProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
        alert('Error loading products. Please check if the server is running.');
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price) {
      alert('Name and price are required!');
      return;
    }

    fetch("http://localhost:5000/api/products", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock) || 0
      })
    })
    .then(res => res.json())
    .then(data => {
      fetchProducts();
      setShowForm(false);
      setFormData({ name: '', price: '', description: '', image: '', stock: '', category: '' });
      alert('Product added successfully!');
    })
    .catch(err => {
      console.error(err);
      alert('Error adding product');
    });
  };

  const handleDelete = (productId, productName) => {
    if (window.confirm(`Are you sure you want to delete "${productName}"?`)) {
      fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'DELETE'
      })
      .then(res => {
        if (res.ok) {
          fetchProducts();
          alert('Product deleted successfully!');
        } else {
          alert('Error deleting product');
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error deleting product');
      });
    }
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h2>Products</h2>
        <button className="add-btn" onClick={() => setShowForm(true)}>
          Add Product
        </button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`} className="product-link">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">₹{product.price}</p>
            </Link>
            <button 
              className="delete-btn" 
              onClick={(e) => {
                e.preventDefault();
                handleDelete(product._id, product.name);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="add-form">
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Product Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price *"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <input
                type="url"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock Quantity"
                value={formData.stock}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleInputChange}
              />
              <div className="form-buttons">
                <button type="submit">Add Product</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
