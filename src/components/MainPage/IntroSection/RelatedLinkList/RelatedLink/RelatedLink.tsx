import { Link } from 'react-router-dom';
import styles from './RelatedLink.module.css';

// type: props
interface RelatedLinkProps {
  relatedLink: {
    linkName: string;
    title: string;
    to: string;
    link: string;
  };
}

const RelatedLink = ({ relatedLink }: RelatedLinkProps) => {
  return (
    <li key={relatedLink.linkName}>
      <p>
        <strong>{relatedLink.linkName}</strong>:&nbsp;
        <Link
          to={relatedLink.to}
          target='_blank'
          title={relatedLink.title}
          className={styles.link}
        >
          {relatedLink.link}
        </Link>
      </p>
    </li>
  );
};

export default RelatedLink;