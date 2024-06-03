import IntroSection from '../../components/MainPage/IntroSection/IntroSection';
import SkillSection from '../../components/MainPage/SkillSection/SkillSection';
import ProjectSection from '../../components/MainPage/ProjectSection/ProjectSection';
import AwardSection from '../../components/MainPage/AwardSection/AwardSection';
import { useAppSelector } from '../../hooks/useRedux';

const MainPage = () => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <main className={`${theme === 'dark' ? 'dark_bg_01 dark_font_01' : ''}`}>
      <IntroSection />
      <SkillSection />
      <ProjectSection />
      <AwardSection />
    </main>
  );
};

export default MainPage;