import { useLocation } from 'react-router-dom';
import GNBLink from './GNBLink/GNBLink';
import styles from './GNB.module.css';

const GNB = () => {
  const { pathname } = useLocation();

  // list: gnb link
  const gnbLinkList = [
    { path: '/', title: '메인' }
  ];

  return (
    <nav className={styles.gnb}>
      <ul className={styles.gnb_link_list}>
        {gnbLinkList.map(gnbLink => (
          <GNBLink
            key={gnbLink.path}
            gnbLink={gnbLink}
            pathname={pathname}
          />
        ))}
      </ul>
    </nav>
  );
};

export default GNB;