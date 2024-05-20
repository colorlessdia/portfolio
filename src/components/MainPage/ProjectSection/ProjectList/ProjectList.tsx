import type { ProjectItemType } from '../../../../types';
import ProjectItem from './ProjectItem/ProjectItem';

const ProjectList = () => {
  // list: projectItem
  const projectItemList: ProjectItemType[] = [
    {
      projectName: '포트폴리오',
      timeframe: '2024-05-18 ~',
      participant: '김동현 (1명)',
      task: 'Front-End',
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'TS', 'ReactJS', 'Redux']
      },
      comment: 'comment text',
      link: 'colorlessdia.github.io/portfolio/index.html',
      media: {
        type: 'image',
        content: '',
      }
    }
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