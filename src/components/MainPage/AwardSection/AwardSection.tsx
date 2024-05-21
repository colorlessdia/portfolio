import styles from './AwardSection.module.css';

const AwardSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        <h2 className={styles.section_title}>Awards</h2>
      </div>
    </section>
  );
};

export default AwardSection;