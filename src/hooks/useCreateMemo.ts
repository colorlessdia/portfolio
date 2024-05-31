import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from './useRedux';
import { memoActions } from '../libs/redux/reducers/memoSlice';

const useCreateMemo = () => {
  const [memoValue, setMemoValue] = useState<string>('');
  const inputRef = useRef<null | HTMLInputElement>(null);
  const appDispatch = useAppDispatch();

  // input: change value
  const handleChangeCreateMemoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemoValue(e.target.value);
  };

  // button: create memo
  const handleClickCreateMemo = () => {
    // return: empty memo
    if (memoValue.length === 0) return;

    // memo template
    const memoTemplate = {
      id: uuidv4(),
      content: memoValue,
    };

    // dispatch: memo
    appDispatch( memoActions.createMemo(memoTemplate) );

    setMemoValue('');
  };

  // input: keydown create memo
  const handleKeyDownCreateMemo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClickCreateMemo();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return {
    handleChangeCreateMemoValue,
    handleClickCreateMemo,
    handleKeyDownCreateMemo,
    inputRef,
    memoValue
  };
};

export default useCreateMemo;