import { useAppSelector } from '../../hooks/useRedux';
import Copyright from './Copyright/Copyright';
import styles from './Footer.module.css';

const Footer = () => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? 'dark_bg_02 dark_font_01' : ''}`}>
      <div className={styles.footer_inner}>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;