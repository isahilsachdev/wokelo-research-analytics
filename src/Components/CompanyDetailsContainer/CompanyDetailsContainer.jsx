import React from 'react'
import "./CompanyDetailsContainer.css"
import linkIcon from "../../Assets/Images/link-icon.png"
import locationIcon from "../../Assets/Images/location-icon.png"

const CompanyDetailsContainer = (props) => {
  const {company, handleSelectedCompany, isCompanySelected} = props

  return (
    <div className={`company-details-container ${isCompanySelected ? 'bg-company-selected' : ''}`}>
      <div className="company-details-header">
        <div className="company-details-logo">
          <div>
            <img src={`https://res.cloudinary.com/crunchbase-production/image/upload/${company.logo}`} alt="company-logo" />
          </div>
          <div>
            {company.name}
          </div>
        </div>
        <div className="add-btn" onClick={() => handleSelectedCompany(company, isCompanySelected ? "remove" : "add")}>
          {isCompanySelected ? "X Remove" : "+ Add"}
        </div>
      </div>
      <div className="company-location">
        <div>
          <img src={linkIcon} alt="link-icon" />
          <div>
            Website
          </div>
        </div>
        <div>
          <img src={locationIcon} alt="location-icon" />
          <div>
            HQ : Santa Clara, Usa
          </div>
        </div>
        <div>
          <img src={locationIcon} alt="" />
          <div>
            Technology
          </div>
        </div>
      </div>
      <div className="company-description">
        <span>
          From Crushbase: 
        </span> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </div>
    </div>
  )
}

export default CompanyDetailsContainer