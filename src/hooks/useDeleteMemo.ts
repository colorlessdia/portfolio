import { memoActions } from "../libs/redux/reducers/memoSlice";
import { useAppDispatch } from "./useRedux";

const useDeleteMemo = (id: string) => {
  const appDispatch = useAppDispatch();
  
  // delete memo
  const handleClickDeleteMemo = () => {
    appDispatch( memoActions.deleteMemo(id) );
  };

  return {
    handleClickDeleteMemo,
  };
};

export default useDeleteMemo;