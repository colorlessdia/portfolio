import { FaTrophy } from "react-icons/fa";
import type { AwardType } from "../../../../../types";
import styles from './TrophyBadge.module.css';

// type: props
interface TrophyBadgeProps {
  award: AwardType;
}

const TrophyBadge = ({ award }: TrophyBadgeProps) => {
  const matchedAwardStyle = {
    '최우수상': { color: '#FFD700' },
    '우수상': { color: '#C0C0C0' },
    '장려상': { color: '#CD7F32' },
  };

  const awardStyleMap = Object.fromEntries(Object.entries(matchedAwardStyle));

  return (
    <span
      style={awardStyleMap[award]}
      className={styles.trophy_badge}
    >
      <FaTrophy />
    </span>
  );
};

export default TrophyBadge;