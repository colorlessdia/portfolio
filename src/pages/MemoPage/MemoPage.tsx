import CreateMemo from "../../components/MemoPage/CreateMemo/CreateMemo";
import SortMemo from "../../components/MemoPage/SortMemo/SortMemo";
import ReadMemo from "../../components/MemoPage/ReadMemo/ReadMemo";
import styles from './MemoPage.module.css';

const MemoPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_inner}>
        <CreateMemo />
        <SortMemo />
        <ReadMemo />
      </div>
    </main>
  );
};

export default MemoPage;