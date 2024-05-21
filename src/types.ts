
// theme
export type ThemeType = 
  | 'light'
  | 'dark';

// projects
export type MediaType =
  | 'component'
  | 'image'
  | 'video';

export type MediaContentType = string;

export interface ProjectItemType {
  projectName: string;
  subTitle: string;
  timeframe: string;
  participant: string;
  task: string;
  taskDetail: string[];
  skills: {
    frontEnd?: string[],
    backEnd?: string[],
    database?: string[]
  };
  comment: string;
  link: string;
  media: {
    type: MediaType;
    content: MediaContentType;
    thumbnail?: string;
  };
  logoPath: string;
}