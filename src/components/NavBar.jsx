import React from "react";
import Header from "./Nav.jsx";
import PropTypes from "prop-types";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="header-nav-wrapper header-nav-wrapper-lg w-100 ">
        <Header />
        <div className="text-center w-100 d-block font-weight-bold text-white-50 text-uppercase"></div>
      </div>
    </React.Fragment>
  );
};

NavBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default NavBar;
