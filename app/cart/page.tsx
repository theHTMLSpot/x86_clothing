// app/product/[id]/page.tsx
"use client"; // This is required to mark the file as a client component

import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext'; // Ensure CartContext is available
import styles from './page.module.css';
import { Item } from '../types/Item';
import { use } from 'react'; // Import the `use` hook to unwrap params

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Use the `use` hook to unwrap the `params` object
  const { id } = use(params);

  const [product, setProduct] = useState<Item | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetch(`/items.json`)
        .then((response) => response.json())
        .then((data) => {
          const foundProduct = data.find((item: Item) => item.id === Number(id));
          if (foundProduct) setProduct(foundProduct);
        })
        .catch((error) => console.error('Error fetching product:', error));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) addToCart(product);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.productPage}>
      <img src={product.img} alt={product.name} className={styles.productImage} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
