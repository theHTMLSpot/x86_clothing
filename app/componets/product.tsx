import { Item } from '../types/Item';
import styles from './product.module.css'; // Adjust path if needed

export default function Product({ item }: { item: Item }) {
    return (
        <a href={`/products/${item.id}`} key={item.id} className={styles.item}>
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </a>
    );
}