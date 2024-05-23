import RelatedLinkList from './RelatedLinkList/RelatedLinkList';
import { calcDDay } from '../../../utils/calcDDay';
import styles from './IntroSection.module.css';

const IntroSection = () => {
  const attendanceCount = calcDDay('2023-03-04T00:00:00');
  const solveCount = attendanceCount + 338;

  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        {/* part: introduce */}
        <div className={styles.part}>
          <h2 className={styles.section_title}>김동현 | Front-End Developer</h2>
          <p className={styles.intro_text}>
            {`UX 관점에서 UI 설계를 하는것에 관심이 많으며, 효율적이고 가독성 좋은 코드 작성을 중요하게 생각합니다.
              백준 알고리즘 문제풀이 사이트에 ${attendanceCount}일간 출석하여 ${solveCount}문제를 해결하였습니다.`}
          </p>
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