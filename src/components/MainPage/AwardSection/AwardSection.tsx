import type { AwardItemType } from '../../../types';
import AwardItem from './AwardItem/AwardItem';
import styles from './AwardSection.module.css';

const AwardSection = () => {
  const awardList: AwardItemType[] = [
    {
      awardName: '실전역량프로젝트(왕중왕전)',
      award: '장려상',
      institution: '인공지능사관학교',
      date: '2023-12'
    },
    {
      awardName: '실전역량프로젝트',
      award: '최우수상',
      institution: '인공지능사관학교',
      date: '2023-12'
    },
    {
      awardName: '코딩 페스티벌',
      award: '우수상',
      institution: '인공지능사관학교',
      date: '2023-10'
    },
    {
      awardName: '핵심프로젝트',
      award: '장려상',
      institution: '인공지능사관학교',
      date: '2023-09'
    },
    {
      awardName: '성적 최우수상',
      award: '최우수상',
      institution: '한국경영원 인재개발원',
      date: '2020-05'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        <h2 className={styles.section_title}>Awards</h2>
        {/* list: award */}
        <table className={styles.table}>
          <caption className={styles.table_caption}>
            <h3>수상내역</h3>
          </caption>
          <thead>
            <tr>
              <th 
                scope='col'
                className={styles.table_heading}
              >수상 이름</th>
              <th 
                scope='col'
                className={styles.table_heading}
              >결과</th>
              <th 
                scope='col'
                className={styles.table_heading}
              >수여 기관</th>
              <th 
                scope='col'
                className={styles.table_heading}
              >날짜</th>
            </tr>
          </thead>
          <tbody>
            {awardList.map(award => (
              <AwardItem
                key={award.awardName + award.award}
                award={award}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AwardSection;