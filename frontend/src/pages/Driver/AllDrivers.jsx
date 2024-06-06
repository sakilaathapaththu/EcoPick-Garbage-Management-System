// import React, { Component } from "react";
// import axios from "axios";
// import "./Driver.css";
// import { Link } from "react-router-dom";
// import { API_BASE_URL } from "../../utils/constants";

// class AllDrivers extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       drivers: [],
//       searchQuery: "",
//       filteredDrivers: [],
//     };
//   }

//   componentDidMount() {
//     this.retrieveDrivers();
//   }

//   retrieveDrivers() {
//     axios
//       .get(`${API_BASE_URL}/drivers/drivers`)
      
//       .then((res) => {
//         if (res.data.success) {
//           this.setState({
//             drivers: res.data.existingDrivers,
//             filteredDrivers: res.data.existingDrivers,
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Error retrieving drivers:", error);
//       });
//   }

//   render() {
//     const { filteredDrivers } = this.state;
//     return (
//       <div className="All-drivers-container">
//         <div className="All-drivers-container-top">
//         <h2 className="drivers-page-title">All Drivers</h2>
//         <div className="add-driver-button">
//         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
//           <Link to={'/RegisterDriver'} className="link-to-deg-driver">Add New Driver</Link>
//         </div>   
//         </div>
        
//         <div className="flex-container">
//           {filteredDrivers.map((driver, index) => (
//             <div key={driver._id} className="driver-card" style={{height:'300px'}}>
//               <div className="card">
//                 <div className="driver-card-image-section">
//                   <div className="image-container">
//                     {driver.imagePath && (
//                       <img
//                         src={`${API_BASE_URL}/${driver.imagePath}`}
//                         alt={`Driver ${index}`}
//                         className="card-img-top"
//                         style={{ objectFit: "cover" }}
//                       />
//                     )}
//                   </div>
//                   <div>
//                   <Link to={`/ViewDriverProfile/${driver._id}`} className="driver-name-link">
//                       <h5 className="card-title">
//                         {driver.firstName} {driver.lastName}
//                       </h5>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div>
//                     <p>{driver.address}</p>
//                     <p>{driver.phone}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default AllDrivers;

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

  handleSearch = (e) => {
    const searchQuery = e.target.value;
    const { drivers } = this.state;
    const filteredDrivers = drivers.filter(
      (driver) =>
        driver.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ searchQuery, filteredDrivers });
  };

  render() {
    const { filteredDrivers, searchQuery } = this.state;
    return (
      <div className="All-drivers-container">
        <div className="All-drivers-container-top">
          <h2 className="drivers-page-title">All Drivers</h2>
          <div className="driver-search">
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={this.handleSearch}
            />

<svg className="driver-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
</svg>
            
          </div>
          <div className="add-driver-button">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12H20M12 4V20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <Link to={"/RegisterDriver"} className="link-to-deg-driver">
              Add New Driver
            </Link>
          </div>
        </div>

        <div className="flex-container">
          {filteredDrivers.map((driver, index) => (
            <div key={driver._id} className="driver-card" style={{ height: "300px" }}>
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
