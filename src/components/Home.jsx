import React from "react";
import BannerImage from "../images/category-1.jpg";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css";
import { Link } from "react-router-dom";

// import { useHistory } from "react-router-dom";

const Home = () => {
   
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground}  alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Know your farmer , Know your food !
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <Link to="/login">
          <button className="primary-button">
            Login Now <FiArrowRight />{" "}
          </button>
          </Link>
          <br></br>
          <Link to="/register">
          <button className="primary-button">
           Register Now <FiArrowRight />{" "}
          </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
