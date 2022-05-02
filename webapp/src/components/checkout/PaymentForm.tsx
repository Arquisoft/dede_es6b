import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/lab';

var correctName=false;
var correctNum=false;
var correctCVV=false;

export default function PaymentForm() {
  const[cardName, setCardName]=React.useState();
  const[cardNum, setCardNum]=React.useState();
  const[cardDate, setCardDate]=React.useState();
  const[cardCVV, setCardCVV]=React.useState();

  React.useEffect(() => {
     correctName=false;
    correctNum=false;
    correctCVV=false;   
  }, []);

  const cardNameChange = (event:any) =>{
    if(event.target.value.trim().length===0){
        correctName=false;
        setCardName(event.target.value);
    }
    else{
        correctName=true;
        setCardName(event.target.value);
    }
    console.log(correctName);
  }
  const cardNumChange = (event:any) =>{
    if(event.target.value.trim().length===0){
        correctNum=false;
        setCardNum(event.target.value);
    } else if(event.target.value.length!==16 || isNaN(event.target.value)){
        correctNum=false;
        setCardNum(event.target.value);
    } 
    else{
        correctNum=true;
        setCardNum(event.target.value);
    }
    console.log(correctNum);
  }

  const cardCVVChange = (event:any) =>{
    if(event.target.value.trim().length===0){
        correctCVV=false;
        setCardCVV(event.target.value);
    } else if(event.target.value.length!==3 || isNaN(event.target.value)){
        correctCVV=false;
        setCardCVV(event.target.value);
    } 
    else{
        correctCVV=true;
        setCardCVV(event.target.value);
    }
    console.log(correctCVV);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Método de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            onChange={cardNameChange}
            label="Nombre del titular"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardName}
            type="text"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            onChange={cardNumChange}
            label="Número de tarjeta"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNum}
            type="text"
            inputProps={{ maxLength: 16} }
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['year', 'month']}
          label="Fecha de caducidad"
          minDate={new Date()}
          maxDate={new Date('2032-06-01')}
          value={cardDate}
          onChange={(newValue:any) => {
            setCardDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
         </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            onChange={cardCVVChange}
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cardCVV}
            type="text"
            inputProps={{ maxLength: 3 }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export function checkFields(){
    return correctName && correctNum && correctCVV;
}