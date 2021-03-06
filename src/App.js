import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./InIt_components/Navbar";
import Welcome from "./InIt_components/Welcome";
import "./index.css";

// Import your user_page component here
import UserTemplate from './user_pages/juan_perez_EXAMPLE/UserTemplate';
import JoePage from './user_pages/javila35/JoePage';
import ShawnComponent from "./user_pages/shawn_huang_fernandes/components/ShawnHPage";
import AliciaPage from "./user_pages/alicia_chao/components/AliciaPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>

          {/* Add your route and user_page component here */}
          {/* 
            <Route path='***YOUR NAME HERE***'>
              < ***YOUR COMPONENT HERE *** />
            </Route>
          */}

          <Route path="/Juan_P">
            <UserTemplate />
          </Route>
          
          <Route path="/javila35">
            <JoePage />
          </Route>


          <Route path="/Shawn_H">
            <ShawnComponent />
          </Route>
          
          <Route path="/Alicia_C">
            <AliciaPage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
