import useDeleteMemo from "../../../../../hooks/useDeleteMemo";

// type: props
interface DeleteMemoProps {
  id: string;
}

const DeleteMemo = ({ id }: DeleteMemoProps) => {
  const { handleClickDeleteMemo } = useDeleteMemo(id);

  return (
    <button
      type='button'
      title='해당 메모를 삭제합니다'
      style={{ color: 'inherit' }}
      onClick={handleClickDeleteMemo}
    >
      삭제
    </button>
  );
};

export default DeleteMemo;