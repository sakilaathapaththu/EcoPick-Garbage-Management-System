import React, { Component } from "react";
import axios from "axios";
import "./Driver.css";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../utils/constants";

class AllDrivers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drivers: [],
      searchQuery: "",
      filteredDrivers: [],
    };
  }

  componentDidMount() {
    this.retrieveDrivers();
  }

  retrieveDrivers() {
    axios
      .get(`${API_BASE_URL}/drivers/drivers`)
      
      .then((res) => {
        if (res.data.success) {
          this.setState({
            drivers: res.data.existingDrivers,
            filteredDrivers: res.data.existingDrivers,
          });
        }
      })
      .catch((error) => {
        console.error("Error retrieving drivers:", error);
      });
  }

  render() {
    const { filteredDrivers } = this.state;
    return (
      <div className="All-drivers-container">
        <div className="All-drivers-container-top">
        <h2 className="drivers-page-title">All Drivers</h2>
        <div className="add-driver-button">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <Link to={'/RegisterDriver'} className="link-to-deg-driver">Add New Driver</Link>
        </div>   
        </div>
        
        <div className="flex-container">
          {filteredDrivers.map((driver, index) => (
            <div key={driver._id} className="driver-card" style={{height:'300px'}}>
              <div className="card">
                <div className="driver-card-image-section">
                  <div className="image-container">
                    {driver.imagePath && (
                      <img
                        src={`${API_BASE_URL}/${driver.imagePath}`}
                        alt={`Driver ${index}`}
                        className="card-img-top"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div>
                  <Link to={`/ViewDriverProfile/${driver._id}`} className="driver-name-link">
                      <h5 className="card-title">
                        {driver.firstName} {driver.lastName}
                      </h5>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <p>{driver.address}</p>
                    <p>{driver.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllDrivers;
