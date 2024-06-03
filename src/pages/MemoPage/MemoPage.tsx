import CreateMemo from '../../components/MemoPage/CreateMemo/CreateMemo';
import SortMemo from '../../components/MemoPage/SortMemo/SortMemo';
import ReadMemo from '../../components/MemoPage/ReadMemo/ReadMemo';
import DeleteAllMemo from '../../components/MemoPage/DeleteAllMemo/DeleteAllMemo';
import styles from './MemoPage.module.css';
import { useAppSelector } from '../../hooks/useRedux';

const MemoPage = () => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <main className={`${styles.main} ${theme === 'dark' ? 'dark_bg_01 dark_font_01' : ''}`}>
      <div className={styles.main_inner}>
        <div className={styles.top_area}>
          <CreateMemo />
          <div className={styles.button_group}>
            <SortMemo />
            <DeleteAllMemo />
          </div>
        </div>
        <ReadMemo />
      </div>
    </main>
  );
};

export default MemoPage;
