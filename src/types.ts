import { ReactNode } from 'react';

// theme
export type ThemeType = 
  | 'light'
  | 'dark';

// projects
export type MediaType =
  | 'component'
  | 'image'
  | 'video';

export type MediaContentType =
  | ReactNode
  | string;

export interface ProjectItemType {
  projectName: string;
  timeframe: string;
  participant: string;
  task: string;
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
  };
}