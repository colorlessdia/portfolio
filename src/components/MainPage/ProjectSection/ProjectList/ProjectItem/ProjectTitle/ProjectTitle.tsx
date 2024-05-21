import styles from './ProjectTitle.module.css';

// type: props
interface ProjectTitleProps {
  projectName: string;
  subTitle: string;
  logoPath: string;
}

const ProjectTitle = ({ projectName, subTitle, logoPath }: ProjectTitleProps) => {
  return (
    <>
      <div className={styles.title_top}>
        {/* logo */}
        <div className={styles.project_logo_wrap}>
          <img
            src={logoPath}
            alt={`${projectName} 프로젝트 로고`}
            className={styles.project_logo}
          />
        </div>
        {/* title */}
        <h3 className={styles.project_title}>
          <strong>{projectName}</strong>
        </h3>
      </div>
      <p>{subTitle}</p>
    </>
  );
};

export default ProjectTitle;