import { ReactNode } from "react";

// import: components
import Header from "../../components/Header/Header";

// type: props
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootLayout;