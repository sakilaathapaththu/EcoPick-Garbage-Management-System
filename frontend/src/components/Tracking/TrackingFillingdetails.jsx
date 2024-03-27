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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

export default function TrackingFillingdetails() {
  const [details, setDetails] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [options, setOptions] = useState({
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "Filling Details",
    exportEnabled: true,
    title: {
      text: "Filling Details",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/Api/Fillingdetails//last/fillingdetail"
        );
        setDetails(response.data);
        // Update pie chart dataPoints
        setOptions((prevOptions) => ({
          ...prevOptions,
          data: [
            {
              ...prevOptions.data[0],
              dataPoints: [
                { y: response.data.filledCapacity, label: "Filled Capacity", color: "red" },
                { y: response.data.emptyCapacity, label: "Empty Capacity", color: "green" },
                { y: response.data.totalCapacity, label: "Total Capacity", color: "blue" },
              ],
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader sx={{ textAlign: "center" }} title="Garbage Filling Details" />
      <CardContent>
        {details ? (
          <React.Fragment>
            <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: 2 }}>
              Total Capacity: {details.totalCapacity}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: 2 }}>
              Filled Capacity: {details.filledCapacity}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: 2 }}>
              Empty Capacity: {details.emptyCapacity}
            </Typography>
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Loading...
          </Typography>
        )}
      </CardContent>
      <Card>
        <CardContent>
          <CanvasJSChart options={options} />
        </CardContent>
      </Card>
    </Card>
  );
}
