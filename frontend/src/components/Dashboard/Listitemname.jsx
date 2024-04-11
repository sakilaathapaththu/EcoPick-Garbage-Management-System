// import * as React from 'react';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import LogoutIcon from '@mui/icons-material/Logout';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AddIcon from '@mui/icons-material/Add';
// import FeedbackIcon from '@mui/icons-material/Feedback';


// import { Link } from 'react-router-dom';

// export const mainListItems = (
//   <React.Fragment>
//     <ListItemButton component={Link} to="/Dashboard">
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItemButton>
    
//     <ListItemButton component={Link} to="/Addcollectingdata" >
//       <ListItemIcon>
//         <AddIcon/>
//       </ListItemIcon>
//       <ListItemText primary="Add Collecting Details" />
//     </ListItemButton>
   
//     <ListItemButton component={Link} to="">
//       <ListItemIcon>
//         <FeedbackIcon />
//       </ListItemIcon>
//       <ListItemText primary="View Feedback" />
//     </ListItemButton>
//     <ListItemButton component={Link} to="">
//       <ListItemIcon>
//         <LogoutIcon />
//       </ListItemIcon>
//       <ListItemText primary="Logout" />
//     </ListItemButton>
//   </React.Fragment>
// );
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import DvrIcon from '@mui/icons-material/Dvr';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link, useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session data (e.g., authentication tokens) from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Navigate to the login page
    navigate("/Login");
  };

  return (
    <ListItemButton onClick={handleLogout}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  );
};

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/Dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    
    <ListItemButton component={Link} to="/Addcollectingdata" >
      <ListItemIcon>
        <AddIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Collecting Details" />
    </ListItemButton>
   
    <ListItemButton component={Link} to="">
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary="View Feedback" />
    </ListItemButton>

    <ListItemButton component={Link} to="/Viewfillingrecode">
      <ListItemIcon>
        <DvrIcon />
      </ListItemIcon>
      <ListItemText primary="View Filling Records" />
    </ListItemButton>
    
    <LogoutButton />
  </React.Fragment>
);




//   export const secondaryListItems = (
//     <React.Fragment>
//       <ListSubheader component="div" inset>
//         Saved reports
//       </ListSubheader>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Current month" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Last quarter" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Year-end sale" />
//       </ListItemButton>
//     </React.Fragment>
//   );