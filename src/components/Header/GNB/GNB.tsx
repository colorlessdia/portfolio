import { useLocation } from 'react-router-dom';
import GNBLink from './GNBLink/GNBLink';
import styles from './GNB.module.css';
import { useAppSelector } from '../../../hooks/useRedux';

const GNB = () => {
  const { pathname } = useLocation();
  const { theme } = useAppSelector(state => state.theme);

  // list: gnb link
  const gnbLinkList = [
    { path: '/', title: '메인' },
    { path: '/memo', title: '메모장' },
    { path: '/color', title: '컬러 팔레트' },
  ];

  return (
    <nav className={styles.gnb}>
      <ul className={`${styles.gnb_link_list} ${theme === 'dark' ? 'dark_font_01' : ''}`}>
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