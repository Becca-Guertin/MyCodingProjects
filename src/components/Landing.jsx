import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import helloText from "../assets/images/HelloWorldIMG.png";
import greenBG from "../assets/images/GreenBannerIMG.png";
import bioIMG from "../assets/images/BeccaBioIMG.png";
import img2 from "../assets/images/ClownBabeTexture-min.png";
import img3 from "../assets/images/PlantAlienBabeTex_colors.png";
import img5 from "../assets/images/EverythingMeansNothing.PNG";
import img6 from "../assets/images/Modern-Pulp-celebrateNewChallenges.PNG";
import img8 from "../assets/images/DE0A4174-6922-4D78-97C8-D40DB7961115.JPG";
import img9 from "../assets/images/SurprisedAlienBabe_redTex.png";
import img12 from "../assets/images/Modern-Pulp-myHeartRevamp.PNG";
import purpleBGimg from "../assets/images/SiteBackGroundHorizontal.PNG";
import img16 from "../assets/images/LearnMore-landingButton.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/style.css";

const Landing = () => {
  const carouselImgs = [
    { url: img2 },
    { url: img12 },
    { url: img5 },
    { url: img6 },
    { url: img8 },
    { url: img9 },
  ];
  // const carouselImgs = [img3,img16, img9];

  console.log("Carousel Images: ", carouselImgs);

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: `url(${greenBG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%", // Ensures it stretches full width
          minHeight: "30vh", // Limits how big it gets
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem 0", // Adds padding to prevent overcrowding
        }}
      >
        {/* Selfie Buddies Image - Keeps it centered and at a good size */}
        <img
          className="logo fullyRound shadow zoom hoverHand"
          src={
            "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/SelfieBuddiesA.png"
          }
          alt="@sunflowerpopshop"
        />

        {/* Hello World Image - Centers dynamically */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            display: "flex",
            minHeight: "20vh", // Keeps it balanced under the header
          }}
        >
          <img
            alt="hello world"
            className="zoom"
            src={helloText}
            style={{
              maxWidth: "65%", // Ensures responsiveness
              maxHeight: "50vh", // Prevents it from being too large
              objectFit: "contain",
            }}
          />
        </Grid>
      </Box>

      <Container>
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Link to="" title="">
              <img
                className="bio-img"
                src={bioIMG}
                alt="becca is an artist and software engineer based out of the greater seattle area"
                // style={{ height: 400, width: 500 }}
              ></img>
            </Link>
          </Grid>
          <Grid item>
            <img
              className="roundCorners img"
              alt=""
              src={img3}
              // style={{ maxHeight: 300, maxWidth: 300 }}
            />
          </Grid>
          <Grid item xs={4} style={{ paddingLeft: 400 }}></Grid>
        </Grid>
      </Container>

      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item></Grid>
          <Grid item>
            <Grid item>
              <Link to="/about">
                <div className="box">
                  <img
                    className="zoom learn-more"
                    src={img16}
                    alt="learn more"
                    style={{
                      marginLeft: 20,
                      marginBottom: 20,
                    }}
                  ></img>
                  <div className="middle"></div>
                </div>
              </Link>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        style={{
          paddingTop: 100,
          paddingBottom: 75,
          backgroundImage: "url(" + purpleBGimg + ")",
          backgroundSize: "100%",
        }}
      >
        <Grid item></Grid>
        {/* Carousel Section */}
        {/* <Grid
          item
          xs={12}
          sm={8}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            width: "100%",
          }}
        > */}
        {/* <Box className="carousel-wrapper"> */}
        {/* <SimpleImageSlider
            width="100%" // This makes the slider take up 100% of the width of the wrapper div
            height="auto" // Adjust the height accordingly, or set a max height
            images={carouselImgs}
            showBullets={true}
            showNavs={true}
          /> */}
        {/* </Box> */}
        {/* </Grid> */}
        <Grid item></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Landing;
