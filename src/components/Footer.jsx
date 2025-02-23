import React from "react";
import { Paper, Box } from "@mui/material";
import bg from "../assets/images/WebsiteBG.png";
import img from "../assets/images/TyCrop-footer.jpg";
import clsx from "clsx";
import Grid from '@mui/material/Grid2'

const Footer = (props) => {
  const { footerShadow, sidebarToggle, footerFixed } = props;
  
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
      </Paper>
    </React.Fragment>
  );
};

export default Footer;
