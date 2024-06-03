import CreateMemo from '../../components/MemoPage/CreateMemo/CreateMemo';
import SortMemo from '../../components/MemoPage/SortMemo/SortMemo';
import ReadMemo from '../../components/MemoPage/ReadMemo/ReadMemo';
import DeleteAllMemo from '../../components/MemoPage/DeleteAllMemo/DeleteAllMemo';
import styles from './MemoPage.module.css';

const MemoPage = () => {
  return (
    <main className={styles.main}>
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
