import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from "./components/signin.component";
import Register from "./components/register.component";
import homepage from "./components/homepage.component";
import foodmenu from "./components/foodmenu.component";
import order from "./components/order.component";
import table from "./components/table.component";
import homepagewaiter from "./components/homepagewaiter.component";
import homepagechef from "./components/homepagechef.component";
import homepagemanager from "./components/homepagemanager.component";



function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to={"/homepage"}>Restaurant Automation</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/homepage"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Register</Link>
              </li>
              
              <li className="nav-item">
              <Link className="nav-link" to={"/foodmenu"}>Foodmenu</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={"/order"}>Order</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={"/table"}>Table</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Signin} />
            <Route path="/sign-in" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/homepage" component={homepage} />
            <Route path="/homepagewaiter" component={homepagewaiter} />
            <Route path="/homepagechef" component={homepagechef} />
            <Route path="/homepagemanager" component={homepagemanager} />
            <Route path="/foodmenu" component={foodmenu} />
            <Route path="/order" component={order} />
            <Route path="/table" component={table} />

          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
