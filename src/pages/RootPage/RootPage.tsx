import { Outlet } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { themeActions } from '../../libs/redux/reducers/themeSlice';

const RootPage = () => {
  const appDispatch = useAppDispatch();

  useEffect(() => {
    const themeHistory = localStorage.getItem('theme');
    
    if (themeHistory === 'dark') {
      appDispatch( themeActions.changeTheme('dark') );
    } else {
      appDispatch( themeActions.changeTheme('light') );
    }

  }, [appDispatch]);

  return (
    <>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </>
  );
};

export default RootPage;
