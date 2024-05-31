import { Outlet } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout/RootLayout';

const RootPage = () => {
  return (
    <>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </>
  );
};

export default RootPage;
