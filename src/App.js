
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';

import Services from './components/Services/Services';
import Home from './components/Home/Home';



function App() {
  return (
    <div>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
