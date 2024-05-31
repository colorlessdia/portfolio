import { memoActions } from "../libs/redux/reducers/memoSlice";
import { useAppDispatch } from "./useRedux";

const useDeleteMemo = (id: string) => {
  const appDispatch = useAppDispatch();
  
  // delete memo
  const handleClickDeleteMemo = () => {
    const answer = window.confirm('메모를 삭제하시겠습니까?');

    if (answer) {
      appDispatch( memoActions.deleteMemo(id) );
    }
  };

  return {
    handleClickDeleteMemo,
  };
};

export default useDeleteMemo;