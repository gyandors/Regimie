import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductContextProvider } from './Components/Context/ProductContext';
import Root from './Pages/Root';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'store', element: <Store /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

export default function App() {
  return (
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  );
}
