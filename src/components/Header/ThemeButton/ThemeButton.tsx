import { PiSunDim, PiMoon } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { themeActions } from '../../../libs/redux/reducers/themeSlice';
import styles from './ThemeButton.module.css';

const ThemeButton = () => {
  const appDispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);

  const handleClickChangeTheme = () => {
    if (theme === 'light') {
      appDispatch( themeActions.changeTheme('dark') );
      localStorage.setItem('theme', 'dark');
      } else {
        appDispatch( themeActions.changeTheme('light') );
      localStorage.setItem('theme', 'light');
    }

  };

  return (
    <button
      type='button'
      onClick={handleClickChangeTheme}
      style={{ fontSize: theme === 'light' ? '2.4rem' : '2.8rem'}}
      className={`${styles.theme_button} ${theme === 'dark' ? 'dark_font_01' : ''}`}
    >
      {
        theme === 'light' ?
        <PiMoon /> :
        <PiSunDim />
      }
    </button>
  );
};

export default ThemeButton;