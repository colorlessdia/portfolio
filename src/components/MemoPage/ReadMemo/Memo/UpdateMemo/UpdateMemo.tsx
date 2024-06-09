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
      title={isUpdateMode ? '메모 수정을 완료합니다' : '해당 메모를 수정합니다'}
      style={{ color: 'inherit' }}
      onClick={handleClickUpdateMode}
    >
      {isUpdateMode ? '완료' : '수정'}
    </button>
  );
};

export default UpdateMemo;