import React from 'react';
import { Paper } from '@mui/material';

export default function Item({ item }) {
  return (
    <div>
      <Paper>
        <img src={item.image} style={{ display: "block", width: "100%", height: "auto" }} alt="Carousel Item" />
        <h2>{item.description}</h2>
      </Paper>
    </div>
  );
}