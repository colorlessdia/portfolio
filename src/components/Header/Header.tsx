import Logo from './Logo/Logo';
import GNB from './GNB/GNB';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        {/* header group: top */}
        <div className={styles.group_top}>
          <Logo />
        </div>
        {/* header group: bottom */}
        <div className={styles.group_bottom}>
          <GNB />
        </div>
      </div>
    </header>
  );
};

export default Header;
