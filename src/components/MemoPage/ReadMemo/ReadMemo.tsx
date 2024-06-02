import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/useRedux";
import Memo from "./Memo/Memo";
import styles from './ReadMemo.module.css';

const ReadMemo = () => {
  const { memoList } = useAppSelector(state => state.memo);

  useEffect(() =>  {
    console.log(memoList)
  }, [memoList]);

  return (
    <ul className={styles.memo_list}>
      {
        memoList.map(memo => (
          <Memo
            key={memo.id}
            memo={memo}
          />
        ))
      }
    </ul>
  );
};

export default ReadMemo;