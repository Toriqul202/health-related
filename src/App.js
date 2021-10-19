
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';

import Services from './components/Services/Services';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Detail from './components/Detail/Detail';
import PrivateRoute from './components/Private/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Registar from './components/Registar/Registar';



function App() {
  return (
    <div>
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <PrivateRoute exact path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute exact path="/services/:detail">
           <Detail></Detail>
          </PrivateRoute>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/registar">
            <Registar></Registar>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
