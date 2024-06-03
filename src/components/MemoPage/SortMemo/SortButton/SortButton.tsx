import { useAppDispatch } from "../../../../hooks/useRedux";
import { memoActions } from "../../../../libs/redux/reducers/memoSlice";
import type { SortButtonType } from "../../../../types";
import styles from './SortButton.module.css';

// type: props
interface SortButtonProps {
  buttonInfo: SortButtonType;
}

const SortButton = ({ buttonInfo }: SortButtonProps) => {
  const appDispatch = useAppDispatch();

  const handleClickSortMemo = () => {
    appDispatch( memoActions.sortMemo(buttonInfo.sortType) );
  };

  return (
    <button
      type='button'
      onClick={handleClickSortMemo}
      className={styles.button}
    >
      {buttonInfo.name}
    </button>
  );
};

export default SortButton;