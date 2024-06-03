import Logo from './Logo/Logo';
import GNB from './GNB/GNB';
import ThemeButton from './ThemeButton/ThemeButton';
import { useAppSelector } from '../../hooks/useRedux';
import styles from './Header.module.css';

const Header = () => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <header className={`${styles.header} ${theme === 'dark' ? 'dark_bg_02' : ''}`}>
      <div className={styles.header_inner}>
        {/* header group: top */}
        <div className={styles.group_top}>
          <Logo />
          <ThemeButton />
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
