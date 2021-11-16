import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import {  Combustivel } from "./components/Pages/Combustivel";
import { Destino } from "./components/Pages/Destino";

function Prova() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/destino" component={Destino} />
            <Route path="/combustivel" component={Combustivel} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Prova;
