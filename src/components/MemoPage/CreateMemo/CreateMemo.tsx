import useCreateMemo from '../../../hooks/useCreateMemo';
import styles from './CreateMemo.module.css';

const CreateMemo = () => {
  const {
    handleChangeCreateMemoValue,
    handleClickCreateMemo,
    handleKeyDownCreateMemo,
    inputRef,
    memoValue
  } = useCreateMemo();

  return (
    <div className={styles.create_memo}>
      <input
        type='text'
        ref={inputRef}
        value={memoValue}
        onChange={handleChangeCreateMemoValue}
        onKeyDown={handleKeyDownCreateMemo}
        className={styles.input}
      />
      <button
        type='button'
        onClick={handleClickCreateMemo}
        className={styles.button}
      >
        메모 생성
      </button>
    </div>
  );
};

export default CreateMemo;
