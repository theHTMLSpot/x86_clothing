// pages/index.tsx
"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { Item } from '../types/Item';
import Product from '../componets/product';

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
    <div className={styles.container}>
      {items.map((item) => (
        Product({ item })
      ))}
    </div>
  );
};

export default Home;
