"use client";

// pages/index.tsx
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { Item } from './types/Item';
import Product from './componets/product';

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch the items data from the public folder
    fetch('/items.json')
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to x86 Clothing</h1>
        <p>Discover the latest styles in coding fashion.</p>
        <button onClick={() => window.location.href = '/shop'}>Shop Now</button>
      </section>

      {/* Items Grid */}
      <div className={styles.container}>
        {items.map((item) => (
          Product({ item })
        ))}
      </div>
    </>
  );
};

export default Home;

