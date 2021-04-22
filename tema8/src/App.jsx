import logo from './logo.svg';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Store from './pages/Store';
import Nav from './components/Nav';
import Product from './pages/Product';
import { useState } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';
import { RoutePropio } from './components/RoutePropio';


export default function App() {
  /*return (
    <div className="App">
      <Router>
        <Nav />

        <div>
          <Route exact path="/" component={Store} />
          <Route exact path="/about" component={About} />
          <Route path="/product/:id" component={Product} />
        </div>
      </Router>
    </div>
  );
  */
  /*
   return (
     <div className="App">
       <Router>
         <Nav />
 
         <div>
           <Route exact path="/" component={Store} />
           <Route exact path="/about" component={About} />
           <Route path="/product/:MODIFICABLE" component={Product}/>
         </div>
       </Router>
     </div>
   );*/

  const [isLogged, setLogged] = useState(true);
  /*
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route exact path="/" component={Store} />
          <Route path="/about">
            {isLogged ? <About /> : <Redirect to='/' />}
          </Route>
  
          <Route path="/product/:id" component={Product} />
  
          <Route path="/product/:id">
            {isLogged ? <Product /> : <Redirect to='/' />}
          </Route>
        </Router>
      </div>
    );

  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Store} />
        <Route path="/about">
          {isLogged ? <About /> : <Redirect to='/' />}
        </Route>

        <ProtectedRoute exact path="/about" component={About} />
        <ProtectedRoute path="/product/:id" component={Product} />
      </Router>
    </div>
  );
  /*/

  return (
    <div className="App">
      <RoutePropio path='/'>
        <Store />
      </RoutePropio>

      <RoutePropio path='/about'>
        <About />
      </RoutePropio>
    </div>
  );
}
