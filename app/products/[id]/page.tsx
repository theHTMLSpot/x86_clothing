"use client";

// app/product/[id]/page.tsx
import { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import styles from './page.module.css';
import { Item } from '../../types/Item';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Item | null>(null);
  const { id } = params;  // Dynamic routing using params

  const { addToCart } = useCart();  // useCart hook on client side

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
