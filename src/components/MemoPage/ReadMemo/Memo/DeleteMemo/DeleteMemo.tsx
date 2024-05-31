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
      onClick={handleClickDeleteMemo}
    >
      삭제
    </button>
  );
};

export default DeleteMemo;