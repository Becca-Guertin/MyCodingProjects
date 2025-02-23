import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import Grid from '@mui/material/Grid2'
import helloText from "../assets/images/HelloWorldIMG.png";
import greenBG from "../assets/images/GreenBannerIMG.png";
import bioIMG from "../assets/images/BeccaBioIMG.png";
import recentProjectsIMG from "../assets/images/RecentProjectsIMJ (1).png";

import img3 from "../assets/images/PlantAlienBabeTex_colors.png";

import purpleBGimg from "../assets/images/SiteBackGroundHorizontal.PNG";
import img16 from "../assets/images/LearnMore-landingButton.png";
import hhimg from "../assets/images/GithubSitePreview.png";
import sunpopimg from "../assets/images/dev268.dhwzft2qluj0d.amplifyapp.com_.png";
import movieimg from "../assets/images/logit-website-github-img.png";

import github from "../assets/images/icons/github.png";

import "../assets/css/style.css";

const Landing = () => {
  const projects = [
    {
      name: "Movie DB Demo Site",
      img: movieimg,
      liveLink: "https://production.d3sbakngzf8hmw.amplifyapp.com/",
      githubRep: "https://github.com/Becca-Guertin/movieRater",
      description:
        "Demo full-stack wepp app, utilizing a Kaggle dataset, stored in a SQL database, with a Node.js backend server. React.js, Vite and Chakra-UI for the frontend.",
      skills:
        "JavaScript, React.js, JSX, Vite, Chakra-UI, Kaggle, SQL, SSMS, NPM, Node.js, Express.js, HTML, CSS",
    },
    {
      name: "Hazards and Hijinks, Demo Site",
      img: hhimg,
      liveLink: "https://dev.d1wehpq1tr8ee4.amplifyapp.com/",
      githubRep: "https://github.com/Becca-Guertin/hazardsAndHijinks",
      description:
        "Portfolio website to showcase artwork created for D&D improv group: Hazards and Hijinks.",
      skills:
        "AWS Amplify, AWS S3, JavaScript, React.js, JSX, Material-UI, HTML, CSS, NPM/Yarn",
    },
    {
      name: "Artist Demo Portfolio",
      img: sunpopimg,
      liveLink: "https://dev268.dhwzft2qluj0d.amplifyapp.com/",
      githubRep: "https://github.com/Becca-Guertin/SunPopShop-",
      description:
        "Artist demo portfolio, with examples of displaying artwork, contact information, socials. This is a React.js front-end app with a static server, deployed with AWS Amplify.",
      skills:
        "AWS Amplify, AWS S3, JavaScript, React.js, JSX, Material-UI, NPM/Yarn, CSS, HTML",
    },
    {
      name: "Handlebars TODO Demo site",
      img: "https://devswag.com/cdn/shop/products/handlebars-shirt-front_1024x1024.png?v=1571438516",
      liveLink: "",
      githubRep: "https://github.com/Becca-Guertin/handlebarsToDos",
      description:
        "This repository is an example of how to use handlebars in Node.js with Express,js and Sequelize, connecting to MySQL database.",
      skills: "JavaScript, handlebars, Node.js, Express.js, Sequelize, MYSQL",
    },
  ];

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
          alt="@sunflowerpopshop self-portrait, black and white"
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
            <img
              className="bio-img"
              src={bioIMG}
              alt="becca is an artist and software engineer based out of the greater seattle area"
            />
          </Grid>
          <Grid item>
            <img
              className="roundCorners img"
              alt="@sunflowerpopshop arwork, Alien woman with galactic background"
              src={img3}
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
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        style={{
          paddingTop: 10,
          backgroundImage: "url(" + purpleBGimg + ")",
          backgroundSize: "100%",
        }}
      >
        <Grid item>
          <img
            className="recentProj"
            src={recentProjectsIMG}
            alt="My Recent Projects"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {projects.map((project, index) => (
            <Grid item key={index}>
              <Card
                style={{ maxWidth: "300px", height: "auto", marginBottom: 50 }}
                sx={{ p: 2, textAlign: "center" }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {project.name}
                </Typography>
                <CardMedia
                  component="img"
                  height="194"
                  image={project.img}
                  alt="demo project landing page"
                />
                <CardContent>
                  <p>{project.description}</p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Skills and Technologies Utilized:{" "}
                    </span>
                    {project.skills}
                  </p>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.liveLink}
                  target="_blank"
                  sx={{ mt: 1 }}
                >
                  Live Site
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href={project.githubRep}
                  target="_blank"
                  sx={{ mt: 1, ml: 1 }}
                >
                  <img
                    src={github}
                    alt="github icon"
                    style={{ maxHeight: "25px", width: "auto" }}
                  />
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Landing;
