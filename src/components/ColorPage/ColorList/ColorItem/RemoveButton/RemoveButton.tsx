import { FaTrashAlt } from 'react-icons/fa';
import { useAppDispatch } from '../../../../../hooks/useRedux';
import { colorActions } from '../../../../../libs/redux/reducers/colorSlice';
import styles from './RemoveButton.module.css';

// type: props
interface RemoveButtonProps {
  code: string;
}

const RemoveButton = ({ code }: RemoveButtonProps) => {
  const appDispatch = useAppDispatch();
  const handleClickRemoveColor = () => {
    const result = window.confirm('색상을 삭제하시겠습니까?');

    if (!result) {
      return
    }

    appDispatch( colorActions.removeColor({ code }) );
  };

  return (
    <button
      type='button'
      title='해당 색상을 삭제합니다'
      onClick={handleClickRemoveColor}
      className={styles.button}
    >
      <FaTrashAlt />
    </button>
  );
};

export default RemoveButton;