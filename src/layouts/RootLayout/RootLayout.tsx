import { ReactNode } from 'react';
import styles from './RootLayout.module.css';

// import: components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// type: props
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className={styles.layout_wrap}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
