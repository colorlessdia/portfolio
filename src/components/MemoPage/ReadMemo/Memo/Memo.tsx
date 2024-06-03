import { useEffect, useRef, useState } from 'react';
import { memoActions } from '../../../../libs/redux/reducers/memoSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import type { MemoType } from '../../../../types';
import getCurrentTime from '../../../../utils/getCurrentTime';
import DeleteMemo from './DeleteMemo/DeleteMemo';
import UpdateMemo from './UpdateMemo/UpdateMemo';
import styles from './Memo.module.css';

// type: props
interface MemoProps {
  memo: MemoType;
}

const Memo = ({ memo }: MemoProps) => {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);
  const [memoValue, setMemoValue] = useState(memo.content);
  const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false);
  const appDispatch = useAppDispatch();
  const mappedDate = Object.fromEntries(Object.entries(memo.dateList));
  const { YYYY, MM, DD, hh, mm, ss } = mappedDate;
  const { theme } = useAppSelector(state => state.theme);

  const handleChangeMemoValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoValue(e.target.value);
  };

  const handleClickUpdateMode = () => {
    setIsUpdateMode(prev => !prev);
  };

  useEffect(() => {
    if (isUpdateMode) {
      // update mode: true
    } else {
      // update mode: false
      if (memo.content !== memoValue) {
        const memoTemplate = {
          id: memo.id,
          content: memoValue,
          isUpdated: true,
          dateList: getCurrentTime()
        };

        appDispatch( memoActions.updateMemo(memoTemplate) );
      }
    }
  }, [isUpdateMode]);

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
        className={`${styles.content} ${theme === 'dark' ? 'dark_bg_01 dark_font_01' : ''}`}
      ></textarea>
      {/* part */}
      <div className={styles.part}>
        {/* date */}
        <p className={styles.date}>{`${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}${memo.isUpdated ? '(수정됨)' : ''}`}</p>
        {/* button */}
        <div className={styles.button_group}>
          <UpdateMemo
            isUpdateMode={isUpdateMode}
            handleClickUpdateMode={handleClickUpdateMode}
          />
          <DeleteMemo id={memo.id} />
        </div>
      </div>
    </li>
  );
};

export default Memo;