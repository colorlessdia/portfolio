import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text_wrap}>
        <p className={styles.text}>페이지를 찾을 수 없어요</p>
        <Link to='/' className={styles.button}>메인페이지로 돌아가기</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;