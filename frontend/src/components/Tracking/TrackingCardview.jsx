import React, { useState, useEffect } from "react";
import axios from "axios";

import { PieChart } from "@mui/x-charts/PieChart";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TrackingFillingdetails from "./TrackingFillingdetails";
import { API_BASE_URL } from "../../utils/constants";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TrackingCardview() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/Api/Addcollectingdata/last/collectingdetail`
        );
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader
        sx={{ textAlign: "center" }}
        title="Garbage Filling Details"
        //   subheader="September 14, 2016"
      />

      <CardContent>
        {details ? (
          <React.Fragment>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ paddingBottom: 2 }}
                >
                  Start Point: {details.startPoint}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ paddingBottom: 2 }}
                >
                  End Point: {details.endPoint}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ paddingBottom: 2 }}
                >
                  Date: {details.date}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ paddingBottom: 2 }}
                >
                  Type: {details.garbageType.join(", ")}
                </Typography>
              </Grid>
            </Grid>
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Loading...
          </Typography>
        )}
      </CardContent>
      <TrackingFillingdetails />
    </Card>
  );
}
