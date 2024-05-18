import Copyright from './Copyright/Copyright';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;