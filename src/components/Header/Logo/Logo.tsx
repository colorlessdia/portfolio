import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <Link to='/'>Kim Donghyun</Link>
    </h1>
  );
};

export default Logo;
