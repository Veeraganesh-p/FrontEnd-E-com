import { Link } from "react-router-dom";
import { FaHeadset, FaShieldAlt, FaShippingFast, FaUndoAlt } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* HERO CARD */}
      <section className="hero-card">
        <div className="hero-text">
          <h1>Welcome to<br />Veera Market</h1>
          <p>
            Your trusted VeeraStore for premium electronics and gadgets.
            Discover amazing deals and the latest products every day.
          </p>

          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>

        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="/src/assets/gettyimages-1357525104-612x612.jpg.jpg"
            alt="Welcome to our store"
          />
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="features-strip">
        <div className="feature-item">
          <FaHeadset className="feature-icon" />
          <h3>Responsive</h3>
          <p>Customer service available 24/7</p>
        </div>

        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <h3>Secure</h3>
          <p>Certified marketplace since 2017</p>
        </div>

        <div className="feature-item">
          <FaShippingFast className="feature-icon" />
          <h3>Shipping</h3>
          <p>Fast and reliable worldwide delivery</p>
        </div>

        <div className="feature-item">
          <FaUndoAlt className="feature-icon" />
          <h3>Transparent</h3>
          <p>Easy, hassle-free return policy</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
