import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductContextProvider } from './Context/ProductContext';
import Root from './Pages/Root';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import ContactUs from './Pages/ContacUs';
import NotFound from './Pages/ErrorPages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home /> },
      { path: 'store', element: <Store /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <ContactUs /> },
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
