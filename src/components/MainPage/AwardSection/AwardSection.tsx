import type { AwardItemType } from '../../../types';
import AwardItem from './AwardItem/AwardItem';
import styles from './AwardSection.module.css';

const AwardSection = () => {
  const awardList: AwardItemType[] = [
    {
      awardName: '실전 역량 프로젝트 (왕중왕전)',
      award: '장려상',
      category: '기업 연계 팀 프로젝트',
      institution: '인공지능 사관학교',
      date: '2023-12'
    },
    {
      awardName: '실전 역량 프로젝트',
      award: '최우수상',
      category: '기업 연계 팀 프로젝트',
      institution: '인공지능 사관학교',
      date: '2023-12'
    },
    {
      awardName: '코딩 페스티벌',
      award: '우수상',
      category: '페스티벌',
      institution: '인공지능 사관학교',
      date: '2023-10'
    },
    {
      awardName: '핵심 프로젝트',
      award: '장려상',
      category: '팀 프로젝트',
      institution: '인공지능 사관학교',
      date: '2023-09'
    },
    {
      awardName: '성적 최우수상',
      award: '최우수상',
      category: '성적 우수자',
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
                className={`${styles.table_heading} ${styles.col_1}`}
              >수상 이름</th>
              <th 
                scope='col'
                className={`${styles.table_heading} ${styles.col_2}`}
              >결과</th>
              <th 
                scope='col'
                className={`${styles.table_heading} ${styles.col_3}`}
              >분류</th>
              <th 
                scope='col'
                className={`${styles.table_heading} ${styles.col_4}`}
              >수여 기관</th>
              <th 
                scope='col'
                className={`${styles.table_heading} ${styles.col_5}`}
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