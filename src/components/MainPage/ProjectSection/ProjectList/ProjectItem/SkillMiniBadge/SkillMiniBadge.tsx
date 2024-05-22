import styles from './SkillMiniBadge.module.css';

// type: props
interface SkillMiniBadgeProps {
  skill: string;
}

const SkillMiniBadge = ({ skill }: SkillMiniBadgeProps) => {
  const matchedSkillColor = {
    'HTML5': '#E34F26',
    'CSS3': '#1572B6',
    'JS': '#F7DF1E',
    'React JS': '#61DAFB',
    'Python': '#3776AB',
    'TS': '#3178C6',
    'Redux': '#764ABC',
    'Three JS': '#000',
    'Node JS': '#5FA04E',
    'Next JS': '#000',
    'My SQL': '#4479A1',
    'Git': '#000',
    'Flask': '#000'
  };

  const boldList = ['JS', 'React JS'];

  const colorMap = Object.fromEntries(Object.entries(matchedSkillColor));

  const miniBadgeStyle = {
    fontWeight: boldList.includes(skill) ? '700' : '500',
    color: boldList.includes(skill) ? '#333' : '#fff',
    backgroundColor: colorMap[skill]
  };

  return (
    <li
      key={skill}
      className={styles.mini_badge}
      style={miniBadgeStyle}
    >
      {skill}
    </li>
  );
};

export default SkillMiniBadge;