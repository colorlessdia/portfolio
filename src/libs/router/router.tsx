import { createBrowserRouter } from 'react-router-dom';

// import: page components
import RootPage from '../../pages/RootPage/RootPage';
import MainPage from '../../pages/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      }
    ]
  }
]);

export default router;
