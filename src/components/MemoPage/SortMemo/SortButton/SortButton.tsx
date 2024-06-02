import { useAppDispatch } from "../../../../hooks/useRedux";
import { memoActions } from "../../../../libs/redux/reducers/memoSlice";
import type { SortButtonType } from "../../../../types";

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
    >
      {buttonInfo.name}
    </button>
  );
};

export default SortButton;