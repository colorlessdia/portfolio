import ColorPicker from '../../components/ColorPage/ColorPicker/ColorPicker';
import ColorList from '../../components/ColorPage/ColorList/ColorList';
import { useAppSelector } from '../../hooks/useRedux';
import styles from './ColorPage.module.css';

const ColorPage = () => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <main className={`${styles.main} ${theme === 'dark' ? 'dark_bg_01 dark_font_01' : ''}`}>
      <div className={styles.main_inner}>
        <ColorPicker />
        <ColorList />
      </div>
    </main>
  );
};

export default ColorPage;