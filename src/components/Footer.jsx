import React from "react";
import { Grid, IconButton, Paper } from "@mui/material";
import { Tooltip } from "@mui/material";
import github from "../assets/images/icons/github.png";
import instagram from "../assets/images/icons/instagram.png";
import linkedin from "../assets/images/icons/linkedin.png";
import sunpopFlower from "../assets/images/siteFlowerIcon.png";
import clsx from "clsx";

const Footer = (props) => {
  const { footerShadow, sidebarToggle, footerFixed } = props;
  const etsy =
    "http://vectorlogofree.com/wp-content/uploads/2014/02/49313-etsy-logo-icon-vector-icon-vector-eps.png";
  return (
    <React.Fragment>
      <Paper
        elevation={footerShadow ? 11 : 2}
        className={clsx("app-footer text-black-50", {
          "app-footer--fixed": footerFixed,
          "app-footer--fixed__collapsed": sidebarToggle,
        })}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ padding: 20 }}
        >
          <Grid item xs={6}></Grid>
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
              <IconButton href="" title="SunPopShop">
                <img
                alt=""
                  className="rounded"
                  src={sunpopFlower}
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
          <Grid item xs={6}></Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default Footer;
