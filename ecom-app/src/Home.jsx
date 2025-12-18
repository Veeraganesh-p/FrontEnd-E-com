import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Veera Market</h1>
          <p>Your online store for electronics and gadgets.</p>
          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/src/assets/gettyimages-1357525104-612x612.jpg.jpg"
            alt="Welcome to our store"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
