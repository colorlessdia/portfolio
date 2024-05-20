import type { MediaContentType, MediaType } from "../../../../../../types";
import styles from './ProjectMedia.module.css';

// type: props
interface ProjectMediaProps {
  media: {
    type: MediaType;
    content: MediaContentType;
  };
}

const ProjectMedia = ({ media }: ProjectMediaProps) => {
  return (
    <div className={styles.project_media}>
      
    </div>
  );
};

export default ProjectMedia;