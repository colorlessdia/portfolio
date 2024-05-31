import CreateMemo from "../../components/MemoPage/CreateMemo/CreateMemo";
import ReadMemo from "../../components/MemoPage/ReadMemo/ReadMemo";
import styles from './MemoPage.module.css';

const MemoPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_inner}>
        <CreateMemo />
        <ReadMemo />
      </div>
    </main>
  );
};

export default MemoPage;