import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useSession } from '@inrupt/solid-ui-react';
import { getAddressesFromPod } from '../../utils/Solid';
import { createOrder } from '../../api/api';
import { StringMappingType } from 'typescript';
import { ShipmentData } from '../../shared/shareddtypes';

var orderData:ShipmentData | null;
var selected=false;

export default function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly string[]>([]);
  const {session} =useSession();
  const loading = open && options.length === 0;

  React.useEffect(() => {
    
    selected=false;
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await getAddressesFromPod(session.info.webId!) 
      .then(
        (
          response 
        ) =>
      { if(response.length==0){
          setOptions(["No options"]);
        } else 
          setOptions(response)
      }
      );

    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  async function setOrderData(o:string){
    if(o && o!=="No options"){
      orderData={
        name:"prueba",
        street:o.split(", ")[0],
        city:o.split(", ")[1],
        zipcode:o.split(", ")[2]
      }
      selected=true;
      localStorage.setItem("address", JSON.stringify(orderData));
      localStorage.setItem("completeAddress", o);
      console.log(selected);
  }
  else{
    selected=false;
  }
}
  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 500 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options}
      loading={loading}
      onChange={(event,o)=>setOrderData(o!)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Dirección de envío"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export function getOrderData(){
  return orderData;
}

export function isSelected(){
  return selected;
}


