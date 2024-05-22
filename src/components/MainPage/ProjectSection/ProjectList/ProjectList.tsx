import type { ProjectItemType } from '../../../../types';
import ProjectItem from './ProjectItem/ProjectItem';

const ProjectList = () => {
  // list: projectItem
  const projectItemList: ProjectItemType[] = [
    {
      projectName: '포트폴리오(현 위치)',
      subTitle: '약식 이력 & 토이 프로젝트 모음',
      timeframe: '2024-05-18 ~',
      participant: '김동현 (1명)',
      task: 'Front-End',
      taskDetail: [
        '프로젝트 기획 / 디자인',
        '메인페이지 구현, 토이 프로젝트 추가(예정)'
      ],
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'TS', 'React JS', 'Redux']
      },
      comment: '경험과 학습을 통해 콘텐츠를 채워나갈 공간, 메인페이지는 김동현을 약식 소개하는 페이지, 토이 프로젝트는 자유형식(ex. 연습용 미니 프로젝트, 리뉴얼 프로젝트, 학습 지식 활용 도전 프로젝트 등)',
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
      timeframe: '2023-11-01 ~ 2023-12-01',
      participant: 'Team. 내집마련 시그니엘 (4명)',
      task: 'Front-End',
      taskDetail: [
        '메인페이지 구현, CCTV페이지 구현, 상세페이지(일부) 레이아웃',
        '3D 모델 추가, 건물층 표현 오브젝트 구현',
        '3D 모델과 연동된 캐러셀로 설비 위치 표기 구현',
        '전체/개별 비디오 각각에 IR/HD 토글 구현',
        '반응형 웹, 알림 기능, 로고 디자인, 로딩 애니메이션, 다크모드'
      ],
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'React JS', 'Redux'],
        backEnd: ['Python', 'Flask', 'Node JS'],
        database: ['My SQL']
      },
      comment: '외부 장치와 RTSP 통신 경험, Redux로 상태관리 경험, React3Fiber로 3D모델 도입 경험',
      link: 'colorlessdia.github.io/eyeson',
      media: {
        type: 'video',
        content: '/media/videos/eyes_on_project.mp4',
        thumbnail: '/media/images/eyes_on_video_thumbnail.png'
      },
      logoPath: '/media/images/eyes_on_logo.png',
    },
    {
      projectName: '땅땅',
      subTitle: '주거 / 숙박시설 경매 중개 플랫폼',
      timeframe: '2023-08-02 ~ 2023-08-17',
      participant: 'Team. 코딩해도되나요 (5명)',
      task: 'Front-End',
      taskDetail: [
        '메인페이지 구현, 매물페이지 구현',
        '중첩 캐러셀로 쇼츠형식 UI 구현',
        '등록일 등록기간간 남은시간 표기',
        '로고 디자인, 로딩 애니메이션'
      ],
      skills: {
        frontEnd: ['HTML5', 'CSS3', 'JS', 'React JS'],
        backEnd: ['Node JS'],
        database: ['My SQL']
      },
      comment: '첫 React 프로젝트, Context API로 상태관리 경험, Front-Back-DB 가 연결된 웹 애플리케이션 제작 경험',
      link: 'colorlessdia.github.io/ddangddang',
      media: {
        type: 'video',
        content: '/media/videos/ddang_ddang_project.mp4',
        thumbnail: '/media/images/ddang_ddang_video_thumbnail.png'
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