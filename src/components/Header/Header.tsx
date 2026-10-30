import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>😎 Emoji Finder</div>
        <nav className={styles.nav}>
          <a href="#">Каталог</a>
          <a href="#">Избранное</a>
        </nav>
      </div>
    </header>
  );
}