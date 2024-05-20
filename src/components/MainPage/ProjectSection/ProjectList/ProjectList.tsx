import type { ProjectItemType } from '../../../../types';
import ProjectItem from './ProjectItem/ProjectItem';

const ProjectList = () => {
  // list: projectItem
  const projectItemList: ProjectItemType[] = [
    {
      projectName: '포트폴리오(현 위치)',
      timeframe: '2024-05-18 ~',
      participant: '김동현 (1명)',
      task: 'Front-End',
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'TS', 'ReactJS', 'Redux']
      },
      comment: 'comment text',
      link: 'colorlessdia.github.io/portfolio',
      media: {
        type: 'component',
        content: '',
      }
    },
    {
      projectName: 'EYES ON',
      timeframe: '2023-11-01 ~ 2023-12-06',
      participant: '내집마련 시그니엘팀 (4명)',
      task: 'Front-End',
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'TS', 'ReactJS', 'Redux'],
        backEnd: ['Python', 'Flask', 'Node JS'],
        database: ['My SQL']
      },
      comment: 'comment text',
      link: 'colorlessdia.github.io/eyeson',
      media: {
        type: 'video',
        content: '/media/eyes_on_project.mp4',
      }
    },
    {
      projectName: '땅땅',
      timeframe: '2023-08-02 ~ 2023-08-17',
      participant: '땅땅팀 (5명)',
      task: 'Front-End',
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'TS', 'ReactJS', 'Redux'],
        backEnd: ['Node JS'],
        database: ['My SQL']
      },
      comment: 'comment text',
      link: 'colorlessdia.github.io/ddangddang',
      media: {
        type: 'video',
        content: '/media/ddang_ddang_project.mp4',
      }
    },
  ];

  return (
    <ul>
      {projectItemList.map(projectItem => (
        <ProjectItem
          key={projectItem.projectName}
          projectItem={projectItem}
        />
      ))}
    </ul>
  );
};

export default ProjectList;