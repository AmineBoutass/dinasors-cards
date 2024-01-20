import React, { useState, useEffect } from "react";
import {
  Paper,
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dinosaur1 from "../images/dinosaur1.jpg";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

const Item = ({ item }) => (
  <Card>
    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    <CardContent>
      <Typography variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>
      <Button className="CheckButton">Check it out!</Button>
    </CardContent>
  </Card>
);

const Logo = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div
      onClick={handleLogoClick}
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px", // Adjust margin as needed
      }}
    >
      <img
        src="Logo.jpg" // Replace with the path to your logo image
        alt="Logo"
        style={{
          height: "50px", // Adjust the size as needed
          width: "50px", // Adjust the size as needed
          borderRadius: "50%", // Make the logo round
        }}
      />
    </div>
  );
};

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #2",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #3",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #4",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #5",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #6",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #2",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #3",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #4",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #5",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
  {
    name: "Random Name #6",
    description: "Probably the most random thing you have ever seen!",
    image: dinosaur1,
  },
];

function Home(props) {
  // Import images directly

  return (
    <div>
      {/* Logo */}
      <Logo />

      {/* */}
      {/* Image Slider */}
      <h1 style={{ display: "flex", justifyContent: "center" }}>Dinosaur</h1>

      <div style={{ position: "relative" }}>
        <div>
        <Carousel
  showThumbs={false}
  dynamicHeight={false}
  showStatus={false}
  emulateTouch={true}
  showIndicators={false}
  showArrows={true}
  centerMode={true}
  centerSlidePercentage={100 / 6} // Adjust the percentage based on the number of items you want to show
  stopOnHover={true} // Stop when hovering over the carousel
  infiniteLoop={false} // Disable infinite loop
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
      >
        <ArrowCircleLeftOutlinedIcon />
      </button>
    )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ position: "absolute", top: 0, right: 0, zIndex: 2 }}
      >
        <ArrowCircleRightOutlinedIcon />
      </button>
    )
  }
>
  {items.map((item, i) => (
    <Item key={i} item={item} />
  ))}
</Carousel>

        </div>
      </div>
      <div>{/* Additional content */}</div>
    </div>
  );
}

export default Home;
