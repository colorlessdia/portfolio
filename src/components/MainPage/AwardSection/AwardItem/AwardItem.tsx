import type { AwardItemType } from '../../../../types';
import TrophyBadge from './TrophyBadge/TrophyBadge';
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
      <th
        scope='row'
        className={styles.table_data}
      >{award.awardName}</th>
      <td className={styles.table_data}>
        {award.award}
        <TrophyBadge award={award.award} />
      </td>
      <td className={styles.table_data}>{award.category}</td>
      <td className={styles.table_data}>{award.institution}</td>
      <td className={styles.table_data}>{award.date}</td>
    </tr>
  );
};

export default AwardItem;