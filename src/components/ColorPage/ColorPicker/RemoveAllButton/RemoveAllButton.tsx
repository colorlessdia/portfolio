import { useAppDispatch } from '../../../../hooks/useRedux';
import { colorActions } from '../../../../libs/redux/reducers/colorSlice';
import styles from './RemoveAllButton.module.css';

const RemoveAllButton = () => {
  const appDispatch = useAppDispatch();

  const handleClickRemoveAllColor = () => {
    const isAllDelete = window.confirm('전체 색상을 삭제하시겠어요?');

    const checkMessage = '전체삭제';

    if (!isAllDelete) {
      return ;
    }

    const checkSign = window.prompt(`"${checkMessage}" 를 정확히 입력하세요 ("" 제외)`);

    if (checkSign !== checkMessage) {
      return;
    }

    appDispatch( colorActions.removeAllColor() );
  };

  return (
    <button
      type='button'
      title='전체 색상을 삭제합니다'
      onClick={handleClickRemoveAllColor}
      className={styles.button}
    >
      색상 전체 삭제
    </button>
  );
};

export default RemoveAllButton;