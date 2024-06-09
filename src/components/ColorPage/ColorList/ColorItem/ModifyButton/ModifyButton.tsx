import { HiPencil } from "react-icons/hi2";
import styles from './ModifyButton.module.css';

// type: props
interface ModifyButtonProps {
  handleClickSetIsModifyMode: () => void;
}

const ModifyButton = ({ handleClickSetIsModifyMode }: ModifyButtonProps) => {
  return (
    <button
      type='button'
      title='해당 색상 이름을 수정합니다'
      onClick={handleClickSetIsModifyMode}
      className={styles.button}
    >
      <HiPencil />
    </button>
  );
};

export default ModifyButton;