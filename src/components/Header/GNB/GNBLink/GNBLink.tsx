import { Link } from 'react-router-dom';
import styles from './GNBLink.module.css';

// type: props
interface GNBLinkProps {
  gnbLink: {
    path: string;
    title: string;
  };
  pathname: string;
}

const GNBLink = ({ gnbLink, pathname }: GNBLinkProps) => {
  return (
    <li
      key={gnbLink.path}
      className={`
        ${styles.link}
        ${pathname === gnbLink.path ? styles.link_active : ''}
      `}
    >
      <Link to={gnbLink.path}>
        {gnbLink.title}
      </Link>
    </li>
  );
};

export default GNBLink;