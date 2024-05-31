import { Dispatch, SetStateAction, useEffect } from 'react';
import { useAppDispatch } from '../../../../../hooks/useRedux';
import { memoActions } from '../../../../../libs/redux/reducers/memoSlice';
import getCurrentTime from '../../../../../utils/getCurrentTime';

// type: props
interface UpdateMemoProps {
  id: string;
  memoValue: string;
  isUpdateMode: boolean;
  setIsUpdateMode: Dispatch<SetStateAction<boolean>>;
}

const UpdateMemo = ({ id, memoValue, isUpdateMode, setIsUpdateMode }: UpdateMemoProps) => {
  const appDispatch = useAppDispatch();
  const handleClickUpdateMode = () => {
    setIsUpdateMode(prev => !prev);
  };

  useEffect(() => {
    if (!isUpdateMode) {
      const memoTemplate = {
        id,
        content: memoValue,
        dateList: getCurrentTime()
      };

      appDispatch( memoActions.updateMemo(memoTemplate) );
    }
  }, [isUpdateMode]);

  return (
    <button
      type='button'
      onClick={handleClickUpdateMode}
    >
      {isUpdateMode ? '완료' : '수정'}
    </button>
  );
};

export default UpdateMemo;