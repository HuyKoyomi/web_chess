import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Home from "../components/Home/Home";
import Computer from "../components/Game/Computer";
import New from '../components/New/New';
import Contact from '../components/Contact/Contact';
import Rating from '../components/Rating/Rating';


function AppRouter() {
  return (
    <div id='app-container'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" exact component={Computer} />
          <Route path="/new" exact component={New} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/rating" exact component={Rating} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
