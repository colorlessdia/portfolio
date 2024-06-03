import { PiSunDim, PiMoon } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { themeActions } from '../../../libs/redux/reducers/themeSlice';
import styles from './ThemeButton.module.css';

const ThemeButton = () => {
  const appDispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);

  const handleClickChangeTheme = () => {
    appDispatch( themeActions.changeTheme() );
  };

  return (
    <button
      type='button'
      onClick={handleClickChangeTheme}
      style={{ fontSize: theme === 'light' ? '2.8rem' : '3.2rem'}}
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