import useCreateMemo from '../../../hooks/useCreateMemo';

const CreateMemo = () => {
  const {
    handleChangeCreateMemoValue,
    handleClickCreateMemo,
    handleKeyDownCreateMemo,
    inputRef,
    memoValue
  } = useCreateMemo();

  return (
    <>
      <input
        type='text'
        ref={inputRef}
        value={memoValue}
        onChange={handleChangeCreateMemoValue}
        onKeyDown={handleKeyDownCreateMemo}
      />
      <button
        type='button'
        onClick={handleClickCreateMemo}
      >
        메모 생성
      </button>
    </>
  );
};

export default CreateMemo;
