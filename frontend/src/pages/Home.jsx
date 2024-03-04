import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  height:200,
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1,
    mt:'3%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
          <Grid item xs={2} sm={3} md={3}>
          <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>xs=2</Item>
          </Grid>
      </Grid>
    </Box>
  )
}
