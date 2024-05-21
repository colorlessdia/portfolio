import IntroSection from '../../components/MainPage/IntroSection/IntroSection';
import SkillSection from '../../components/MainPage/SkillSection/SkillSection';
import ProjectSection from '../../components/MainPage/ProjectSection/ProjectSection';
import AwardSection from '../../components/MainPage/AwardSection/AwardSection';

const MainPage = () => {
  return (
    <main>
      <IntroSection />
      <SkillSection />
      <ProjectSection />
      <AwardSection />
    </main>
  );
};

export default MainPage;