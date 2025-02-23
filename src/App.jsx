import React, { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component {
  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;

    console.log("App", { currentPath, previousPath });
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar {...this.props}/>
          <main>
            <div>
              <Routes>
                <Route
                  path="/"
                  element={<Landing />}
                ></Route>
                <Route
                  path="/About"
                  element={<About />}
                ></Route>
              </Routes>
            </div>
            <Footer />
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
