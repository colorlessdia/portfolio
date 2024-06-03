import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import { useAppSelector } from '../../../hooks/useRedux';

const Logo = () => {
  const { theme } = useAppSelector(state => state.theme);
  return (
    <h1 className={`${styles.logo} ${theme === 'dark' ? 'dark_font_01' : ''}`}>
      <Link to='/'>Kim Donghyun</Link>
    </h1>
  );
};

export default Logo;
