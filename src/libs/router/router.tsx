import { createBrowserRouter } from 'react-router-dom';

// import: router pages
import RootPage from '../../pages/RootPage/RootPage';
import MainPage from '../../pages/MainPage/MainPage';
import MemoPage from '../../pages/MemoPage/MemoPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ColorPage from '../../pages/ColorPage/ColorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/memo',
        element: <MemoPage />,
      },
      {
        path: '/color',
        element: <ColorPage />
      }
    ],
  }
],
  { basename: process.env.PUBLIC_URL }
);

export default router;
