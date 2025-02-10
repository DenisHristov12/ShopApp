import About from './pages/About';
import Contacts from './pages/Contacts';
import Error from './pages/Error';
import Home from './pages/Home';
import Layout from './pages/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/about',
        element: <About />,
      },
      { path: '/contacts', element: <Contacts /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
