import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function card({ images, title, url,description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={images} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ height: 100 }}variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={url} style={{ textDecoration: "none" }}>
          <Button size="small">Go</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
