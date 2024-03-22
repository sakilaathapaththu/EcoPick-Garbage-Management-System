import React, { useState, useEffect } from "react";
import axios from "axios";

import { PieChart } from "@mui/x-charts/PieChart";
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CanvasJSReact from '@canvasjs/react-charts';



//charts
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

export default function TrackingCardview() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/Api/Addcollectingdata//last/collectingdetail"
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
  //chars 
  const [options, setOptions] = useState({
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "New Year Resolutions",
    exportEnabled: true,
    title: {
      text: "",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: 32, label: "Total Capacity" },
          { y: 22, label: "Empty Capacity" },
          { y: 15, label: "Filled Capacity " }
        ],
      },
    ],
  });

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
          <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: 2 }}>
            Start Point: {details.startPoint}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: 2 }}>
            End Point: {details.endPoint}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: 2 }}>
            Date: {details.date}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: 2 }}>
            Type: {details.garbageType.join(", ")}
          </Typography>
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
      
      <CardActions disableSpacing>
      <Button size="small" onClick={handleExpandClick}>View More Details</Button>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
