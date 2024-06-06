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
      title='색상 이름 수정'
      onClick={handleClickSetIsModifyMode}
      className={styles.button}
    >
      <HiPencil />
    </button>
  );
};

export default ModifyButton;