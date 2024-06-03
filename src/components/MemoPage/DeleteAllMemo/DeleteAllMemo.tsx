import { useAppDispatch } from '../../../hooks/useRedux';
import { memoActions } from '../../../libs/redux/reducers/memoSlice';
import styles from './DeleteAllMemo.module.css';

const DeleteAllMemo = () => {
  const appDispatch = useAppDispatch();

  // handler: delete all memo
  const handleClickDeleteAllMemo = () => {
    const isAllDelete =  window.confirm('전체 메모를 삭제하시겠어요?');

    if (!isAllDelete) {
      return;
    }

    // confirm: true
    const checkMessage = '메모전체삭제';
    const checkSign = window.prompt(`"${checkMessage}" 를 정확히 입력하세요 ("" 제외)`);

    if (checkSign !== checkMessage) {
      return;
    }

    appDispatch( memoActions.deleteAllMemo() );
  };

  return (
    <button
      type='button'
      onClick={handleClickDeleteAllMemo}
      className={styles.button}
    >
      메모 전체 삭제
    </button>
  );
};

export default DeleteAllMemo;