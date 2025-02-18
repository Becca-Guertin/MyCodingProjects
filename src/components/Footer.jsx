import React from "react";
import { Grid, Paper, Box, Container } from "@mui/material";
// import { Tooltip, IconButton } from "@mui/material";
// import github from "../assets/images/icons/github.png";
// import instagram from "../assets/images/icons/instagram.png";
// import linkedin from "../assets/images/icons/linkedin.png";
// import sunpopFlower from "../assets/images/siteFlowerIcon.png";
import bg from "../assets/images/WebsiteBG.png";
import img from "../assets/images/TyCrop-footer.jpg";
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
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "auto",
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {/* <Box
         
        > */}
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ padding: 20 }}
          >
            <Grid item>
              <Box>
                <img
                  className="image" //roundCorners
                  src={img}
                  style={{ maxHeight: 300, maxWidth: 300 }}
                  alt="contact information listed"
                ></img>
              </Box>
            </Grid>
          </Grid>
        {/* </Box> */}
      </Paper>
    </React.Fragment>
  );
};

export default Footer;
