import RelatedLinkList from './RelatedLinkList/RelatedLinkList';
import styles from './IntroSection.module.css';

const IntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        {/* part: introduce */}
        <div className={styles.part}>
          <h2 className={styles.section_title}>김동현 | Front-End Developer</h2>
          <p className={styles.intro_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad facere illo repudiandae itaque qui hic, vero cum illum, veritatis quisquam aperiam aliquam ipsa ullam quam id ratione expedita, dolorum consequatur adipisci voluptate! Tempora quae doloremque maiores asperiores dignissimos qui nesciunt, neque nisi quos incidunt adipisci non debitis, ad voluptates, ex itaque ipsam facilis nobis voluptate iste officiis ipsa amet est.</p>
        </div>
        {/* part: related link */}
        <div className={styles.part}>
          <h3 className={styles.part_title}>관련 링크</h3>
          <RelatedLinkList />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;