import ProjectList from './ProjectList/ProjectList';
import styles from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        <h2 className={styles.section_title}>Projects</h2>
        {/* list: project */}
        <ProjectList />
      </div>
    </section>
  );
};

export default ProjectSection;