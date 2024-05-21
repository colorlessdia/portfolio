import type { AwardItemType } from '../../../../types';
import styles from './AwardItem.module.css';

// type: props
interface AwardItemProps {
  award: AwardItemType;
}

const AwardItem = ({ award }: AwardItemProps) => {
  return (
    <tr
      key={award.awardName + award.award}
    >
      <td className={styles.table_data}>{award.awardName}</td>
      <td className={styles.table_data}>{award.award}</td>
      <td className={styles.table_data}>{award.institution}</td>
      <td className={styles.table_data}>{award.date}</td>
    </tr>
  );
};

export default AwardItem;