import React from "react";
import "./Fashion.css";

function Fashion({ products }) {
  return (
    <div className="fashion-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Step Into Style</h1>
        <p>Discover the latest trends and timeless classics for every occasion.</p>
        <button className="shop-btn">Shop Now</button>
      </section>

      {/* Static Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <div className="category-card">
            <img src="https://cdn.shopify.com/s/files/1/0598/1070/9672/files/vjvnow-1_8089e9a6-d4dd-41c1-bc5c-c9d7c3d5965a_480x480.jpg?v=1723104002" alt="Men Fashion" />
            <h3>Men</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=800&q=60" alt="Women Fashion" />
            <h3>Women</h3>
          </div>
          <div className="category-card">
            <img src="https://i.pinimg.com/1200x/7e/38/10/7e381083ba67cbf758d5ef343a7b5ac9.jpg" alt="Kids Fashion" />
            <h3>Kids</h3>
          </div>
        </div>
      </section>

      {/* Featured Static Collection */}
      <section className="collection">
        <h2>Featured Collection</h2>
        <div className="collection-grid">
          <div className="product-card">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/8cad47234074351.Y3JvcCw1ODMzLDQ1NjIsMCw2MzU.png" alt="Jacket" />
            <h4>Leather Jacket</h4>
            <p>₹3,499</p>
          </div>
          <div className="product-card">
            <img src="https://www.ordinaree.com/cdn/shop/files/DSC_8696.jpg?v=1756703522" alt="Dress" />
            <h4>Evening Dress</h4>
            <p>₹2,999</p>
          </div>
          <div className="product-card">
            <img src="https://media.gq.com/photos/60d21a25ab6b8cc6e9d2c80a/1:1/w_3600,h_3600,c_limit/SNEAKER_GUIDE_OPENER.jpg" alt="Sneakers" />
            <h4>White Sneakers</h4>
            <p>₹1,999</p>
          </div>
        </div>
      </section>

      {/* 🔥 Live Products Section (Fetched Data) */}
      <section className="collection">
        <h2>Trending Now</h2>
        <div className="collection-grid">
          {products.length > 0 ? (
            products.slice(0, 12).map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.title} />
                <h4>{item.title.length > 35 ? item.title.slice(0, 35) + "..." : item.title}</h4>
                <p>₹{Math.round(item.price * 85)}</p>
              </div>
            ))
          ) : (
            <p>Loading trending styles...</p>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Stay in the Loop</h2>
        <p>Subscribe to get updates on new arrivals and exclusive offers.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
}

export default Fashion;
