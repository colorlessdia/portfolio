import { ReactNode } from 'react';

// import: components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// type: props
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
