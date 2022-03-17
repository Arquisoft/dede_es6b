import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardProduct from "./CardProduct";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <CardProduct />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardProduct />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardProduct />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardProduct />
        </Grid>
      </Grid>
    </Box>
  );
}
