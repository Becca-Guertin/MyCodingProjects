import React from "react";
import pdfUrl from "../assets/images/RebeccaGuertinResume - 2025.pdf";
import logo from "../assets/images/siteFlowerIcon.png";
import github from "../assets/images/icons/github.png";
import linkedin from "../assets/images/icons/linkedin.png";
import { IconButton, Tooltip, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

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
        paddingBottom={3}
        paddingTop={3}
      >
        <Grid item></Grid>
        <Grid item>
          <Link to="/" title="Home">
            <i>
              <img
                className="image icon"
                alt="Beccaguertin.com home button"
                src={logo}
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
        <Grid item>
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
        <Grid item>
          <IconButton
            className="nav-link text-white text-bold"
            rel="noopener nofollow"
            target="_blank"
            href={pdfUrl}
          >
            <Box>
              <img
                className="icon"
                src={
                  "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/checkOutResume.png"
                }
                alt=""
              />
            </Box>
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Nav;
