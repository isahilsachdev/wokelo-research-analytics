import React, { useLayoutEffect, useState } from 'react'
import CompanyDetailsContainer from '../../Components/CompanyDetailsContainer/CompanyDetailsContainer.jsx';
import PeerAnalysisHeader from '../../Components/PeerAnalysisHeader/PeerAnalysisHeader.jsx';
import axiosApiCall from '../../helpers';
import "./CompanySection.css"
import crossIcon from "../../Assets/Images/cross-icon.png"

const CompanySection = () => {
  const [companyList, setCompanyList] = useState([]);
  const [selectedCompanyList, setSelectedCompanyList] = useState(JSON.parse(localStorage.getItem('company-list')) || []);
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // method to get the list of all the companies
  const getCompanyList = () => {
    if (debouncedSearchTerm) {
      const formData = new FormData();
      formData.append('name', debouncedSearchTerm);
  
      axiosApiCall("assets/get_company_list", "post", formData).then(res => {
        setCompanyList(res.data.data)
      }).catch(err => {
        console.error(err, "err")
      });
    }
  }

  useLayoutEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(search);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  useLayoutEffect(() => {
    getCompanyList(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  // method to check if a company is already selected
  const isCompanySelected = company => {
    let flag = false;
    selectedCompanyList.forEach(selectedCompany => {
      if (selectedCompany.permalink === company.permalink) {
        flag = true;
      }
    })
    return flag;
  }
  
  const handleSelectedCompany = (company, method) => {
    let updatedCompanylist = [];
    // taking method as argument instead of calling isCompanySelected to check
    if (method === 'add') {
      updatedCompanylist = [...selectedCompanyList, company]
    } else {
      // removing the company from selected company list
      updatedCompanylist = selectedCompanyList.filter(
        selectedCompany => selectedCompany.permalink !== company.permalink
      )
    }
    localStorage.setItem('company-list', JSON.stringify(updatedCompanylist))
    setSelectedCompanyList(updatedCompanylist)
  }

  return (
    <div className="company-section-container">
      <PeerAnalysisHeader />
      <div className="add-company-container">
        <h3>Add company for Peer analysis</h3>
        <div className="search-company">
          <input type="text" value={search} onChange={handleChange} placeholder="Type companies names for analysis" />
          <img onClick={() => setSearch("")} src={crossIcon} alt="cross-icon" />
        </div>

        <div className="select-company-section">
          <div>
            {
              search && companyList.filter(company => 
                !isCompanySelected(company)
              ).map((company, i) => (
                <div key={i}>
                  <CompanyDetailsContainer company={company} handleSelectedCompany={handleSelectedCompany} isCompanySelected={isCompanySelected(company)} />
                </div>
              ))
            }
          </div>

          <div>
            {
              selectedCompanyList.length > 0 && (
                <>
                  <h5>
                    Selected Companies
                  </h5>
                  {
                    selectedCompanyList.map((company, i) => (
                      <div key={i}>
                        <CompanyDetailsContainer company={company} handleSelectedCompany={handleSelectedCompany} isCompanySelected={isCompanySelected(company)} />
                      </div>
                    ))
                  }
                </>
              ) 
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanySection