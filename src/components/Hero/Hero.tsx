import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Найдите идеальный эмодзи</h1>
        <p className={styles.subtitle}>Тысячи эмодзи на любой вкус и цвет. Просто введите запрос.</p>
        
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Например: кот, огонь, сердце..." className={styles.input} />
          <button className={styles.button}>Поиск</button>
        </div>
      </div>
    </section>
  );
}