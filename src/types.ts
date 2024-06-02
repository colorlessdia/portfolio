
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

// awards
export type AwardType =
| '최우수상'
| '우수상'
| '장려상';

export interface AwardItemType {
  awardName: string;
  award: AwardType;
  category: string;
  institution: string;
  date: string;
}

// memo
export type UpdatedModeType = boolean | null;

export interface MemoType {
  id: string;
  content: string;
  isUpdated: boolean;
  dateList: { [date: string]: string };
}