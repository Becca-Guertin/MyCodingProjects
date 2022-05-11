import React, { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

//import logo from "./logo.svg";

//import "./App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <main>
            <div>
              <Routes>
                <Route
                  path="/"
                  //exact={true}
                  element={<Landing />}
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
