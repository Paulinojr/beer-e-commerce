import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.burgerMenu}>
        <img src="/images/burger-menu.svg" alt="Burger menu" />
      </div>

      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className={styles.profilePic}
      />
    </header>
  );
} 

export default Header