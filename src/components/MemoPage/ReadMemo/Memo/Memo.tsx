import { useRef, useState } from 'react';
import type { MemoType } from '../../../../types';
import DeleteMemo from './DeleteMemo/DeleteMemo';
import styles from './Memo.module.css';
import UpdateMemo from './UpdateMemo/UpdateMemo';

// type: props
interface MemoProps {
  memo: MemoType;
}

const Memo = ({ memo }: MemoProps) => {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);
  const [memoValue, setMemoValue] = useState(memo.content);
  const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false);
  const mappedDate = Object.fromEntries(Object.entries(memo.dateList));
  const { YYYY, MM, DD, hh, mm, ss } = mappedDate;

  const handleChangeMemoValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoValue(e.target.value);
  };

  return (
    <li
      key={memo.id}
      className={styles.memo}
    >
      {/* content */}
      <textarea
        ref={textareaRef}
        readOnly={isUpdateMode ? false : true}
        value={memoValue}
        onChange={handleChangeMemoValue}
        className={styles.content}
      ></textarea>
      {/* part */}
      <div className={styles.part}>
        {/* date */}
        <p className={styles.date}>{`${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`}</p>
        {/* button */}
        <div className={styles.button_group}>
          <UpdateMemo
            id={memo.id}
            memoValue={memoValue}
            isUpdateMode={isUpdateMode}
            setIsUpdateMode={setIsUpdateMode}
          />
          <DeleteMemo id={memo.id} />
        </div>
      </div>
    </li>
  );
};

export default Memo;