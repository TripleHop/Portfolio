import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Navbar from "./components/shared/Navbar"
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
              <Navbar />
              <Switch>
                <div>
              <Route exact path ={"/"} component={About} />
              <Route exact path ={"blog/Blog"} component={Blog} />
              <Route exact path ={"/Projects"} component={Projects} />
             <Route exact path ={"/Skills"} component={Skills} />
            </div>
            </Switch>
          </div>
        );
    };
};

export default App;
