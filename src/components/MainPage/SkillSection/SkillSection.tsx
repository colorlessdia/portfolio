// import: icons
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython, SiTypescript, SiRedux, SiNodedotjs, SiNextdotjs, SiMysql } from "react-icons/si";

import SkillBadge from './SkillBadge/SkillBadge';
import styles from './SkillSection.module.css';

const SkillSection = () => {
  // list: strong skill
  const strongSkillList = [
    { skillIcon: <SiHtml5 />, skillName: 'HTML5', skillStyles: { color: '#fff', backgroundColor: '#E34F26' } },
    { skillIcon: <SiCss3 />, skillName: 'CSS3', skillStyles: { color: '#fff', backgroundColor: '#1572B6' } },
    { skillIcon: <SiJavascript />, skillName: 'JS', isBold: true, skillStyles: { color: '#000', backgroundColor: '#F7DF1E' } },
    { skillIcon: <SiReact />, skillName: 'React JS', isBold: true, skillStyles: { color: '#000', backgroundColor: '#61DAFB' } },
    { skillIcon: <SiPython />, skillName: 'Python', skillStyles: { color: '#fff', backgroundColor: '#3776AB' } },
  ];

  // list: knowledgeable skill
  const knowledgeableSkillList = [
    { skillIcon: <SiTypescript />, skillName: 'TS', skillStyles: { color: '#fff', backgroundColor: '#3178C6' } },
    { skillIcon: <SiRedux />, skillName: 'Redux', skillStyles: { color: '#fff', backgroundColor: '#764ABC' } },
    { skillIcon: <SiNodedotjs />, skillName: 'Node JS', skillStyles: { color: '#fff', backgroundColor: '#5FA04E' } },
    { skillIcon: <SiNextdotjs />, skillName: 'Next JS', skillStyles: { color: '#fff', backgroundColor: '#000' } },
    { skillIcon: <SiMysql />, skillName: 'My SQL', skillStyles: { color: '#fff', backgroundColor: '#4479A1' } },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        <h2 className={styles.section_title}>Skills</h2>
        {/* strong part */}
        <div className={styles.skill_part}>
          {/* list: strong skill */}
          <h3 className={styles.part_title}>Strong</h3>
          <ul className={styles.skill_list}>
            {strongSkillList.map(skill => (
              <SkillBadge
                key={skill.skillName}
                skill={skill}
              />
            ))}
          </ul>
        </div>
        {/* knowledgeable part */}
        <div className={styles.skill_part}>
          {/* list: knowledgeable skill */}
          <h3 className={styles.part_title}>Knowledgeable</h3>
          <ul className={styles.skill_list}>
            {knowledgeableSkillList.map(skill => (
              <SkillBadge
                key={skill.skillName}
                skill={skill}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;