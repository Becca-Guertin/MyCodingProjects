import React, { useState } from "react";
import logo from "../assets/images/siteFlowerIcon.png";
import github from "../assets/images/icons/github.png";
import Modal8 from "../components/Modals/Modal8";
import linkedin from "../assets/images/icons/linkedin.png";
import { IconButton, Tooltip, Grid } from "@material-ui/core";

import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Nav = () => {
  const [isModalOpen8, setIsModalOpen2] = useState(false);
  const handleClick2 = () => {
    setIsModalOpen2(true);
  };
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
          <IconButton>
            <Modal8
              open={isModalOpen8}
              setIsModalOpen={setIsModalOpen2}
            ></Modal8>
            <img
              className="icon"
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/checkOutResume.png"
              }
              onClick={handleClick2}
              alt=""
            ></img>
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Nav;
