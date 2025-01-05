import React, { useState } from "react";
import logo from "../assets/images/siteFlowerIcon.png";
import github from "../assets/images/icons/github.png";
import instagram from "../assets/images/icons/instagram.png";
import linkedin from "../assets/images/icons/linkedin.png";
import {
  IconButton,
  Tooltip,
  Grid,
} from "@material-ui/core";
import sunpop from "../assets/images/Sunpoplogostamp.png";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Nav = () => {
  const [state, setState] = React.useState({
    right: false,
    display: false,
  });


  return (
    <React.Fragment>
      {/* <Container className="d-flex" fixed> */}
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={4}
        className="navBar"
        style={{ backgroundColor: "white" }}
      >
        <Grid item style={{ marginTop: 45, marginBottom: 45 }}>
          <div className="header-nav-menu d-none d-lg-block"></div>
        </Grid>
        <Grid item></Grid>
        <Grid item>
          <Link to="/" title="Home">
            <i>
              <img
                className="image"
                alt="Beccaguertin.com home button"
                src={logo}
                style={{ height: 80, width: 80, marginTop: 20, marginBottom: 20 }}
              />
            </i>
          </Link>
        </Grid>
        <Grid item xs={6}>
            <div className="row" style={{ marginBottom: 25 }}>
              <Tooltip arrow title="Github">
                <IconButton
                  className="nav-link text-white text-bold"
                  href="https://github.com/Becca-Guertin"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="btn-wrapper--icon">
                    <img
                    alt=""
                      style={{
                        height: 40,
                        width: 40,
                      }}
                      src={github}
                    />
                  </span>
                </IconButton>
              </Tooltip>
              <IconButton href="https://www.sunpopshop.com" title="SunPopShop Artist Website">
                <img
                alt="SunPopShop Artist Website"
                  className="rounded"
                  src={sunpop}
                  style={{ maxHeight: 35, maxWidth: 35 }}
                ></img>
              </IconButton>
              <Tooltip arrow title="LinkedIn">
                <IconButton
                  className="nav-link text-white text-bold"
                  href="https://www.linkedin.com/in/rebecca-guertin/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="btn-wrapper--icon">
                    <img
                    alt=""
                      style={{
                        height: 40,
                        width: 40,
                      }}
                      src={linkedin}
                    />
                  </span>
                </IconButton>
              </Tooltip>

              <Tooltip arrow title="Instagram">
                <IconButton
                  className="nav-link text-white text-bold"
                  href="https://www.instagram.com/sunflowerpopshop/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="btn-wrapper--icon">
                    <img
                    alt=""
                      style={{
                        height: 50,
                        width: 50,
                      }}
                      src={instagram}
                    />
                  </span>
                </IconButton>
              </Tooltip>
            </div>
          </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Nav;
