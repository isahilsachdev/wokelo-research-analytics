import React, { useState } from 'react'
import PeerAnalysisHeader from '../../Components/PeerAnalysisHeader/PeerAnalysisHeader';
import "./Results.css"

const Results = () => {
  const [results, setResults] = useState(JSON.parse(localStorage.getItem('company-list')) || []);

  return (
    <div className="results-container">
      <PeerAnalysisHeader page="results" />
      <h3>Results</h3>
      <div className="results-collage-container">
        {
          results.length > 0 && results.map(result => (
            <div className="results-collage">
              <img src={`https://res.cloudinary.com/crunchbase-production/image/upload/${result.logo}`} alt="company-logo" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Results