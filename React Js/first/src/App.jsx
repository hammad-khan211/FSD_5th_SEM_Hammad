import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Fashion from "./components/Fashion";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from multiple API endpoints for more variety
    Promise.all([
      fetch("https://fakestoreapi.com/products").then(res => res.json()),
      fetch("https://fakestoreapi.com/products/category/men's clothing").then(res => res.json()),
      fetch("https://fakestoreapi.com/products/category/women's clothing").then(res => res.json())
    ])
      .then(([all, men, women]) => {
        // Combine all products (and remove duplicates)
        const merged = [...all, ...men, ...women];
        const unique = Array.from(new Map(merged.map(p => [p.id, p])).values());
        setProducts(unique);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <Fashion products={products} />
    </div>
  );
}

export default App;
