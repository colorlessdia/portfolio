import { SiReact } from "react-icons/si";
import type { MediaContentType, MediaType } from "../../../../../../types";
import styles from './ProjectMedia.module.css';

// type: props
interface ProjectMediaProps {
  media: {
    type: MediaType;
    content: MediaContentType;
    thumbnail?: string;
  };
}
const ProjectMedia = ({ media }: ProjectMediaProps) => {
  return (
    <div className={styles.project_media}>
      {/* type: component */}
      {
        media.type === 'component' && 
        <div className={styles.type_component}>
          <span className={styles.icon_react}><SiReact /></span>
        </div>
      }
      {/* type: video */}
      {
        media.type === 'video' &&
        <video
          src={media.content}
          controls
          muted
          poster={media?.thumbnail}
          className={styles.type_video}
        ></video>
      }
    </div>
  );
};

export default ProjectMedia;