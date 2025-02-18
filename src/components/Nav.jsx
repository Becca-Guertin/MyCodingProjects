import React from "react";
import logo from "../assets/images/siteFlowerIcon.png";
import github from "../assets/images/icons/github.png";
import instagram from "../assets/images/icons/instagram.png";
import linkedin from "../assets/images/icons/linkedin.png";
import { IconButton, Tooltip, Grid } from "@material-ui/core";
import sunpop from "../assets/images/Sunpoplogostamp.png";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Nav = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={4}
        className="navBar"
        style={{ backgroundColor: "white" }}
      >
        <Grid item></Grid>
        <Grid item>
          <Link to="/" title="Home">
            <i>
              <img
                className="image icon"
                alt="Beccaguertin.com home button"
                src={logo}
                // style={{  marginBottom: 30 }}
              />
            </i>
          </Link>
        </Grid>
        <Grid item>
          <Tooltip arrow title="Github">
            <IconButton
              className="nav-link text-white text-bold"
              href="https://github.com/Becca-Guertin"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="btn-wrapper--icon">
                <img className="icon" alt="" src={github} />
              </span>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid>
          <IconButton
            href="https://www.sunpopshop.com"
            title="SunPopShop Artist Website"
          >
            <img
              alt="SunPopShop Artist Website"
              className="rounded icon"
              src={sunpop}
            ></img>
          </IconButton>
        </Grid>
        <Grid>
          <Tooltip arrow title="LinkedIn">
            <IconButton
              className="nav-link text-white text-bold"
              href="https://www.linkedin.com/in/rebecca-guertin/"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="btn-wrapper--icon">
                <img className="icon" alt="" src={linkedin} />
              </span>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip arrow title="Instagram">
            <IconButton
              className="nav-link text-white text-bold"
              href="https://www.instagram.com/sunflowerpopshop/"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="btn-wrapper--icon">
                <img className="icon" alt="" src={instagram} />
              </span>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Nav;
