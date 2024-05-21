import type { ProjectItemType } from '../../../../../types';
import ProjectMedia from './ProjectMedia/ProjectMedia';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import SkillMiniBadge from './SkillMiniBadge/SkillMiniBadge';
import styles from './ProjectItem.module.css';

// type: props
interface ProjectItemProps {
  projectItem: ProjectItemType;
}

const ProjectItem = ({ projectItem }: ProjectItemProps) => {
  return (
    <li
      key={projectItem.projectName}
      className={styles.project_item}
    >
      {/* media */}
      <ProjectMedia media={projectItem.media} />
      {/* description */}
      <div className={styles.project_description}>
        <div className={styles.part}>
          <ProjectTitle
            projectName={projectItem.projectName}
            subTitle={projectItem.subTitle}
            logoPath={projectItem.logoPath}
          />
        </div>
        <div className={styles.part}>
          {/* time frame */}
          <p>
            <strong>기간</strong>: {projectItem.timeframe}
          </p>
          {/* participant */}
          <p>
            <strong>참여 인원</strong>:&nbsp;
            {projectItem.participant}
          </p>
        </div>
        <div className={styles.part}>
          {/* task */}
          <p>
            <strong>담당</strong>: {projectItem.task}
          </p>
          <ul>
            {projectItem.taskDetail.map(detail => (
              <li
                key={detail}
                className={styles.task_detail}
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
        {/* skills */}
        <div className={styles.part}>
          {/* front && true */}
          {projectItem.skills?.frontEnd &&
          <div className={styles.skill_part}>
            <strong className={styles.skill_type}>Front-End</strong>
            <ul className={styles.skill_list}>
              {projectItem.skills.frontEnd.map(skill => (
                <SkillMiniBadge
                  key={skill}
                  skill={skill}
                />
              ))}
            </ul>
          </div>}
          {/* back && true */}
          {projectItem.skills?.backEnd &&
          <div className={styles.skill_part}>
            <strong className={styles.skill_type}>Back-End</strong>
            <ul className={styles.skill_list}>
              {projectItem.skills.backEnd.map(skill => (
                <SkillMiniBadge
                  key={skill}
                  skill={skill}
                />
              ))}
            </ul>
          </div>}
          {/* database && true */}
          {projectItem.skills?.database &&
          <div className={styles.skill_part}>
            <strong className={styles.skill_type}>Database</strong>
            <ul className={styles.skill_list}>
              {projectItem.skills.database.map(skill => (
                <SkillMiniBadge
                  key={skill}
                  skill={skill}
                />
              ))}
            </ul>
          </div>}
        </div>
        <div className={styles.part}>
          {/* github */}
          <p>
            <strong>Github</strong>: {projectItem.link}
          </p>
        </div>
        {/* comment */}
        <p>
          <strong>Comment</strong>: {projectItem.comment}
        </p>
      </div>
    </li>
  );
};

export default ProjectItem;