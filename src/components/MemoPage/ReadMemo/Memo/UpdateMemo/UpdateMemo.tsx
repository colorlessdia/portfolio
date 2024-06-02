import type { UpdatedModeType } from "../../../../../types";

// type: props
interface UpdateMemoProps {
  isUpdateMode: UpdatedModeType;
  handleClickUpdateMode: () => void;
}

const UpdateMemo = ({ isUpdateMode, handleClickUpdateMode }: UpdateMemoProps) => {
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