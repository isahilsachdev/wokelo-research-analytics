import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axiosApiCall from '../../helpers';
import wokeloIcon from "../../Assets/Images/Wokelo.ai.png"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate();
  const handleRedirection = () => {
    if (!username || !password) {
      setErrorMessage("Invalid credentials");
      return;
    }
    const payload = {
      username, 
      password,
    }
    axiosApiCall("token", "post", payload).then(res => {
      localStorage.setItem("token", res.data.access)
      navigate("/company-list");
      setErrorMessage("")
    }).catch(err => {
      console.error(err)
      setErrorMessage("Invalid credentials")
    })
  };

  const handleChange = (event, inp) => {
    if (errorMessage) setErrorMessage("");
    if (inp === "username") {
      setUsername(event.target.value)
    } else {
      setPassword(event.target.value)
    }
  } 

  return (
    <>
      <div className="wokelo-icon">
        <img src={wokeloIcon} alt="wokelo-icon" />
      </div>
      <div className="login-page-container">
        <div className="login-page-heading">Hello, <br /> welcome</div>
        <div className="login-page-subheading">
          <p>Log in to get started</p>
        </div>

        <div className="login-page-inputs">
          <div>
            <label className="login-label">Username</label>
            <input type="text" value={username} onChange={e => handleChange(e, "username")} placeholder="Enter Username" />
          </div>
          <div>
            <label className="login-label">Password</label>
            <input type="password" value={password} onChange={e => handleChange(e, "password")} placeholder="Enter Password" />
          </div>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <div></div>

        </div>

        <div className="submit">
          <button onClick={handleRedirection} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default Login