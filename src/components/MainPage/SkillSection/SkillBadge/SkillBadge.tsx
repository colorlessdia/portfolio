import { ReactNode } from 'react';
import styles from './SkillBadge.module.css';

// type: props
interface SkillBadgeProps {
  skill: {
    skillIcon: ReactNode;
    skillName: String;
    isBold?: boolean;
    skillStyles: { [property: string]: string };
  };
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {

  return (
    <li
      className={styles.badge}
      style={skill.skillStyles}
    >
      <div className={styles.badge_icon}>{skill.skillIcon}</div>
      <p
        className={`
          ${styles.badge_title} 
          ${skill?.isBold && styles.weight_bold}
        `}
      >
        {skill.skillName}
      </p>
    </li>
  );
};


export default SkillBadge;