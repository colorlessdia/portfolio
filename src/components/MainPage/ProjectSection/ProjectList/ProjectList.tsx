import type { ProjectItemType } from '../../../../types';
import ProjectItem from './ProjectItem/ProjectItem';

const ProjectList = () => {
  // list: projectItem
  const projectItemList: ProjectItemType[] = [
    {
      projectName: '포트폴리오(현 위치)',
      subTitle: '프로젝트 부제목',
      timeframe: '2024-05-18 ~',
      participant: '김동현 (1명)',
      task: 'Front-End',
      taskDetail: ['담당내용1', '담당내용2'],
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'TS', 'React JS', 'Redux']
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis perferendis nemo obcaecati voluptatem error molestias distinctio quisquam asperiores consectetur a.',
      link: 'colorlessdia.github.io/portfolio',
      media: {
        type: 'component',
        content: '',
      },
      logoPath: '/media/images/react_logo.png',
    },
    {
      projectName: 'EYES ON',
      subTitle: '열화상 카메라 활용 전기 설비 이상유무 판단 시스템',
      timeframe: '2023-11-01 ~ 2023-12-06',
      participant: 'Team. 내집마련 시그니엘 (4명)',
      task: 'Front-End',
      taskDetail: ['담당내용1', '담당내용2'],
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'React JS', 'Redux'],
        backEnd: ['Python', 'Flask', 'Node JS'],
        database: ['My SQL']
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis perferendis nemo obcaecati voluptatem error molestias distinctio quisquam asperiores consectetur a.',
      link: 'colorlessdia.github.io/eyeson',
      media: {
        type: 'video',
        content: '/media/videos/eyes_on_project.mp4',
      },
      logoPath: '/media/images/eyes_on_logo.png',
    },
    {
      projectName: '땅땅',
      subTitle: '주거 / 숙박시설 경매 플랫폼',
      timeframe: '2023-08-02 ~ 2023-08-17',
      participant: 'Team. 코딩해도되나요 (5명)',
      task: 'Front-End',
      taskDetail: ['담당내용1', '담당내용2'],
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'React JS'],
        backEnd: ['Node JS'],
        database: ['My SQL']
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis perferendis nemo obcaecati voluptatem error molestias distinctio quisquam asperiores consectetur a.',
      link: 'colorlessdia.github.io/ddangddang',
      media: {
        type: 'video',
        content: '/media/videos/ddang_ddang_project.mp4',
      },
      logoPath: '/media/images/ddang_ddang_logo.png',
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