import styles from './EmojiGrid.module.css';

const emojis = [
  { symbol: '😀', name: 'Улыбка' },
  { symbol: '🔥', name: 'Огонь' },
  { symbol: '🚀', name: 'Ракета' },
  { symbol: '❤️', name: 'Сердце' },
  { symbol: '👍', name: 'Класс' },
  { symbol: '🐱', name: 'Кот' },
  { symbol: '💻', name: 'Ноутбук' },
  { symbol: '🎉', name: 'Праздник' },
];

export default function EmojiGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {emojis.map((emoji, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.symbol}>{emoji.symbol}</span>
              <span className={styles.name}>{emoji.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}