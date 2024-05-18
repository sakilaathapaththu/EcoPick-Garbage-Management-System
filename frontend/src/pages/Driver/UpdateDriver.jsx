import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { API_BASE_URL } from "../../utils/constants";
function UpdateDriver() {
  const [driver, setDriver] = useState({});
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/drivers/drivers/${id}`)
      .then((res) => {
        if (res.data.status === "Driver details fetched") {
          setDriver(res.data.driver);
          setLoading(false);
        } else {
          console.error("Failed to fetch driver details:", res.data.error || "Unknown error");
        }
      })
      .catch((error) => {
        console.error("Error fetching driver details:", error.message || "Unknown error");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver(prevDriver => ({
      ...prevDriver,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleUpdate = () => {
    axios.put(`${API_BASE_URL}/drivers/update/${id}`, driver)
      .then((res) => {
        console.log("Driver updated successfully:", res.data);
        navigate(`/ViewDriverProfile/${id}`);
      })
      .catch((error) => {
        console.error("Error updating driver:", error.message || "Unknown error");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className='driver-update-page'>
      <div style={{display:'block', height:'80%'}}>
      <div className='driver-update-flex-container'>
        <div className='personal-info-update'>
        <div className="image-container-update">

{driver.imagePath && (
  <img
    src={`${API_BASE_URL}/${driver.imagePath}`}
    className="card-img-top"
    style={{ objectFit: "cover" }}
  />
)}
</div  >

<h3 >Personal Information</h3>
        <input className='update-input-personal-name' type="text" id="firstName" name="firstName" value={driver.firstName} onChange={handleChange} />
        <input className='update-input-personal-name' type="text" id="lastName" name="lastName" value={driver.lastName} onChange={handleChange} /><br />
        <input className='update-input-personal' type="text" id="address" name="address" value={driver.address} onChange={handleChange} /><br />
        <input className='update-input-personal' type="text" id="phone" name="phone" value={driver.phone} onChange={handleChange} /><br />
        <input className='update-input-personal' type="text" id="nic" name="nic" value={driver.nic} onChange={handleChange} />


        </div>
        <div className='update-flex-block-container'>
          <div className='license-info-update'>
            <h3 >License information</h3>
            <input className='update-input-license' type="text" id="lclass" name="lclass" value={driver.lclass} onChange={handleChange} /><br />
            <input className='update-input-license' type="text" id="lnumber" name="lnumber" value={driver.lnumber} onChange={handleChange} /><br />
            <input className='update-input-license-date' type="date" id="expiry" name="expiry" value={driver.expiry} onChange={handleChange} />
          </div>
          <div className='login-info-update'>
            <h3 >Login Information</h3>
          <input className='update-input-username' type="text" id="username" name="username" value={driver.username} onChange={handleChange} />
          <div className="password-input-container-update">
          <input className='update-input-license-pass' type={showPassword ? "text" : "password"} id="password" name="password" value={driver.password} onChange={handleChange} />
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
        </div>
          </div>

        </div>
        

      </div>
      <div style={{height:'20%' , marginTop:'-5%'}}>
      <button className='save-changes-btn' onClick={handleUpdate}>Save Changes</button>

      </div>
      

      </div>

      
    </div>
  );
}

export default UpdateDriver;
