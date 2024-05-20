import type { ProjectItemType } from '../../../../../types';
import styles from './ProjectItem.module.css';
import ProjectMedia from './ProjectMedia/ProjectMedia';

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
        <h3>
          <strong>프로젝트 이름</strong>: {projectItem.projectName}
        </h3>
        <p><strong>프로젝트 기간</strong>: {projectItem.timeframe}</p>
        <p>
          <strong>참여 인원</strong>:&nbsp;
          {projectItem.participant}
        </p>
        <p>
          <strong>담당 업무</strong>:&nbsp;
          {projectItem.task}
        </p>
        <div>
          <strong>사용 기술</strong>:&nbsp;
          {/* front && true */}
          {projectItem.skills?.frontEnd &&
          <div>
            <strong>Front-End</strong>:&nbsp;
            <ul className={styles.skill_list}>
              {projectItem.skills.frontEnd.map(skill => (
                <li
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>}
          {/* back && true */}
          {projectItem.skills?.backEnd &&
          <div>
            <strong>Back-End</strong>:&nbsp;
            <ul className={styles.skill_list}>
              {projectItem.skills.backEnd.map(skill => (
                <li
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>}
          {/* database && true */}
          {projectItem.skills?.database &&
          <div>
            <strong>Database</strong>:&nbsp;
            <ul className={styles.skill_list}>
              {projectItem.skills.database.map(skill => (
                <li
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>}
        </div>
        <p><strong>Github</strong>: {projectItem.link}</p>
        <p><strong>Comment</strong>: {projectItem.comment}</p>
      </div>
    </li>
  );
};

export default ProjectItem;