import { BsCopy } from 'react-icons/bs';
import type { ColorType } from '../../../../../types';
import styles from './CopyColor.module.css';

interface CopyColorProps {
  colorItem: ColorType;
}

const CopyColor = ({ colorItem }: CopyColorProps) => {
  const handleClickCopyColorCode = () => {
    navigator.clipboard.writeText(colorItem.code)
      .then(_ => {})
      .catch((error) => {
        console.log(`${error} 색상 코드 복사 실패`);
      });
  };

  return (
    <>
      <button
        type='button'
        title='클릭시 색상코드가 복사됩니다'
        onClick={handleClickCopyColorCode}
        style={{ background: colorItem.code }}
        className={styles.color}
      >
        <div
          className={styles.copy_button}
        >
          <BsCopy />
        </div>
      </button>
    </>
  );
};

export default CopyColor;