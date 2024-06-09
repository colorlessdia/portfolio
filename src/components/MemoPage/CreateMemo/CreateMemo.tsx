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
    <div className={styles.create_memo_wrap}>
      <div className={styles.create_memo}>
        <input
          type='text'
          ref={inputRef}
          value={memoValue}
          onChange={handleChangeCreateMemoValue}
          onKeyDown={handleKeyDownCreateMemo}
          placeholder='메모를 입력해보세요'
          className={styles.input}
        />
        <button
          type='button'
          title='입력한 메모가 등록됩니다'
          onClick={handleClickCreateMemo}
          className={styles.button}
        >
          메모 생성
        </button>
      </div>
    </div>
  );
};

export default CreateMemo;
