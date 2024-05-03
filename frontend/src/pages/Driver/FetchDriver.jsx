import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link ,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { API_BASE_URL } from "../../utils/constants";

function FetchDriver() {
  const [driver, setDriver] = useState(null); 
  const [showPassword, setShowPassword] = useState(false);
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  useEffect(() => {
    axios.get(`${API_BASE_URL}/drivers/drivers/${id}`)
      .then((res) => {
        if (res.data.status === "Driver details fetched") {
          setDriver(res.data.driver);
        } else {
          console.error("Failed to fetch driver details:", res.data.error || "Unknown error");
        }
      })
      .catch((error) => {
        console.error("Error fetching driver details:", error.message || "Unknown error");
      });
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this driver?");
    if (confirmDelete) {
      axios.delete(`${API_BASE_URL}/drivers/delete/${id}`)
        .then((res) => {
          console.log("Driver deleted successfully:", res.data);
      
          navigate('/ViewAllDriversList');
        })
        .catch((error) => {
          console.error("Error deleting driver:", error.message || "Unknown error");
        });
    }
  };

  if (!driver) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="driver-details-container">
      <div className="driver-details-flex-container">
        <div className="personal-info-container">
        <div className="driver-img-and-name">
        <div className="image-container-fetch">

{driver.imagePath && (
  <img
    src={`${API_BASE_URL}/${driver.imagePath}`}
    className="card-img-top"
    style={{ objectFit: "cover" }}
  />
)}
</div  >
<h3 style={{color:'#3EA055',marginTop:'8s%'}}>{driver.firstName}&nbsp;{driver.lastName}</h3>
            
            </div>

                  <div className="driver-personl-details">
                    <div style={{textAlign:'end', fontWeight:'bold'}}>
                    <p>Name   :</p>
                    <p>Address   :</p>
                    <p>Contact Number   :</p>
                    <p>NIC   :</p>

                    </div>
                    <div>
                      
                  <p>&nbsp;&nbsp;{driver.firstName}&nbsp;{driver.lastName}</p>
                  <p>&nbsp;&nbsp;{driver.address}</p>
                  <p>&nbsp;&nbsp;{driver.phone}</p>
                  <p>&nbsp;&nbsp;{driver.nic}</p>

                    </div>

                  </div> 

        </div>
        <div className="driver-details-flex-block-container">
          <div className="license-info-container">
            <div className="licens-info-title" >
            <h3 >License information</h3>

            </div>
            <div className="license-info-details">
              <div style={{textAlign:'end', fontWeight:'bold'}}>
                <p>License Class   :</p>
                <p>License Number   :</p>
                <p>Expiry Date   :</p>
              </div>
              <div>
              <p> &nbsp;&nbsp;{driver.lclass}</p>
              <p> &nbsp;&nbsp;{driver.lnumber}</p>
              <p>&nbsp;&nbsp; {driver.expiry}</p>

              </div>


            </div>


          </div>
          <div className="login-info-container">
            <div className="login-info-title">
            <h3>Login information</h3>
            </div>
            <div className="login-info-details">
              <div style={{textAlign:'end', fontWeight:'bold'}}>
                <p>Username   :</p>
                <p>Password   :</p>
              </div>
              <div >
              <p>&nbsp;&nbsp; {driver.username}</p>
                  <div className="password-container">
                 <p style={{marginTop:'5px'}}> &nbsp;&nbsp;{showPassword ? driver.password : "*".repeat(driver.password.length)}</p>
                <FontAwesomeIcon className="pass-icon" icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword(!showPassword)} />
                  </div>

              </div>
            

            </div>
         


       


          </div>

        </div>

      </div>
  
      <div>

      <div className="driver-btn-section">
      <div className="driver-update-button">
        <Link className="driver-update-btn-link" to="/ViewAllDriversList">Back</Link>
        </div>
        <div className="driver-update-button">
        <Link className="driver-update-btn-link" to={`/update-driver/${id}`} >Update</Link>
        </div>
        
        <button className="driver-delete-btn" onClick={handleDelete}>Delete</button>
      </div>

     
      </div>

    </div>
  );
}

export default FetchDriver;
