import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import ContactUs from './Pages/ContacUs';
import NotFound from './Pages/ErrorPages/NotFound';
import ProductDetails from './Pages/ProductDetails';
import Auth from './Pages/Auth';

import AuthContext from './Context/AuthContext';

export default function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/store" exact>
          {authCtx.isLoggedIn ? <Store /> : <Redirect to="/auth" />}
        </Route>

        <Route path="/store/:productId">
          <ProductDetails />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>

        <Route path="/auth">
          {!authCtx.isLoggedIn && <Auth />}
          {authCtx.isLoggedIn && <Redirect to="/store" />}
        </Route>

        {/* The below Route is for invalid URL */}
        <Route>
          <NotFound />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </>
  );
}
