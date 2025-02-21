import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.burgerMenu}>
        <img src="/icons/menu-icon.svg" alt="Burger menu" onClick={() => window.alert("Menu to be implemented")}/>
      </div>

      <img
        src="https://placehold.co/40x40"
        alt="Profile"
        className={styles.profilePic}
      />
    </header>
  );
} 

export default Header