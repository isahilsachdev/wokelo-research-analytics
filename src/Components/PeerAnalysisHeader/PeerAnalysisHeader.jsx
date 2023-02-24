import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./PeerAnalysisHeader.css"
import nextIcon from "../../Assets/Images/next-icon.png"
import nextIconWhite from "../../Assets/Images/next-icon-white.png"

const PeerAnalysisHeader = ({ page }) => {
  const navigate = useNavigate()
  const companyList = JSON.parse(localStorage.getItem('company-list')) || []

  return (
    <>
      <div className="peer-analysis-header">
        <div>
          <h3>
            Peer Analysis
          </h3>
          <p>
            Select company you want to research
          </p>
        </div>
        {
          page !== "results" && (
            <button disabled = {companyList.length === 0} className={`${companyList.length > 0 ? 'next-btn' : 'next-btn btn-disabled'}`} onClick={() => navigate("/results")}>
              <span>Next Step</span> <span><img src={companyList.length === 0 ? nextIcon : nextIconWhite} alt="next-icon" /></span>
            </button>
          )
        }
      </div>
      <hr />
    </>
  )
}

export default PeerAnalysisHeader