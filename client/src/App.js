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
import homepagebusboy from "./components/homepagebusboy.component";
import tablestatus from "./components/tablestatus.component";
import salesanalysis from "./components/salesanalysis.component";
import trackemployee from "./components/trackemployee.component";




function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to={"/homepage"}>Restaurant Automation</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Signin} />
            <Route path="/sign-in" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/homepage" component={homepage} />
            <Route path="/homepagewaiter" component={homepagewaiter} />
            <Route path="/homepagechef" component={homepagechef} />
            <Route path="/homepagemanager" component={homepagemanager} />
            <Route path="/homepagebusboy" component={homepagebusboy} />
            <Route path="/foodmenu" component={foodmenu} />
            <Route path="/order" component={order} />
            <Route path="/table" component={table} />
            <Route path="/tablestatus" component={tablestatus} />
            <Route path="/salesanalysis" component={salesanalysis} />
            <Route path="/trackemployee" component={trackemployee} />

            
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
