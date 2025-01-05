import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
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
  const carouselImgs = [img2, img12, img5, img6, img8, img9];

  return (
    <React.Fragment>
      <div className="container">
        <Grid
          container
          direction="column"
          spacing={4}
          justify="center"
          alignItems="center"
          style={{
            backgroundImage: "url(" + greenBG + ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid item xs={2}></Grid>
          <Grid item>
            <img
              className="logo fullyRound shadow zoom hoverHand"
              style={{ maxHeight: 300, maxWidth: 200 }}
              src={
                "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/SelfieBuddiesA.png"
              }
              alt="@sunflowerpopshop"
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item></Grid>
              <Grid item></Grid>
              <img
                alt="hello world"
                className="roundCorners  zoom"
                src={helloText}
                style={{
                  height: "50%",
                  width: "50%",
                }}
              ></img>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
        <Grid
          container
          direction="column"
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <Grid item>
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
                    src={bioIMG}
                    alt="becca is an artist and software engineer based out of the greater seattle area"
                    style={{ height: 400, width: 500 }}
                  ></img>
                </Link>
              </Grid>
              <Grid item>
                <img
                  className="roundCorners"
                  alt=""
                  src={img3}
                  style={{ maxHeight: 300, maxWidth: 300 }}
                />
              </Grid>
              <Grid item xs={4} style={{ paddingLeft: 400 }}></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item></Grid>
                <Grid item>
                  <Grid item className="justify-content-center">
          
                  <Link to="/about">
                    <div className="box">
                      <img
                        className="image"
                        src={
                          img16
                        }
                        alt="learn more"
                        style={{
                          marginLeft: 20,
                          marginBottom: 20,
                          height: "auto",
                          width: "auto",
                          maxHeight: 370,
                          maxWidth: 370,
                        }}
                      ></img>
                      <div className="middle"></div>
                    </div>
                  </Link>
                  </Grid>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item>
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
              <Grid item> </Grid>
              <Grid item>
                <div className="shadow">
                  <SimpleImageSlider
                    width={600}
                    height={600}
                    images={carouselImgs}
                    showBullets={true}
                    showNavs={true}
                  />
                </div>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Landing;
