import React from 'react'
import "./Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleRedirection = () => {
    navigate("/login");
  };

  return (
    <div className="landing-page-container">
      <div className="landing-page-heading">
        <div>Welcome to</div>
        <div className="landing-page-wokelo-text">Wokelo</div>
      </div>
      <div className="landing-page-subheading">
        <p>Wokelo is a generative AI-powered research assistant platform. It helps generate sector analysis and company deep dives in minutes</p>
      </div>
      <button onClick={handleRedirection} className="get-started-btn">
        Get Started
      </button>
    </div>
  )
}

export default Home