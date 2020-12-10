import React from 'react'
import Button from '@material-ui/core/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';


function Main() {
     return (
        <div>
               <Router>
                    <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Projects">Projects</Link>
                    </nav>

                    <Switch>
                        <Route path="/Contact">
                            <Contact />
                        </Route>
                        <Route path="/Projects">
                            <Projects />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
    

               </Router>
 
        </div>
    )
}

export default Main
