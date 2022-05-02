import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddressesComboBox from '../orders/AddressesComboBox';
import { useSession } from '@inrupt/solid-ui-react';

export default function AddressForm() {
    const { session } = useSession();
    
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dirección de envío
      </Typography>
      <h5>Selecciona tu dirección o <a href={session.info.webId!} target="_blank">crea una nueva</a> en tu pod</h5>
     <AddressesComboBox></AddressesComboBox>
    </React.Fragment>
  );
}