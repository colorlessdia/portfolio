import type { MemoType } from '../../../../types';
import DeleteMemo from './DeleteMemo/DeleteMemo';
import styles from './Memo.module.css';

// type: props
interface MemoProps {
  memo: MemoType;
}

const Memo = ({ memo }: MemoProps) => {
  return (
    <li
      key={memo.id}
    >
      <textarea
        value={memo.content}
        readOnly={true}
        className={styles.content}
      ></textarea>
      <DeleteMemo id={memo.id} />
    </li>
  );
};

export default Memo;