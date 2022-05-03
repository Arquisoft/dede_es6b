import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../components/checkout/AddressForm';
import PaymentForm, { checkFields } from '../components/checkout/PaymentForm';
import Review from '../components/checkout/Review';
import { getSelectUnstyledUtilityClass } from '@mui/base';
import { isSelected } from '../components/orders/AddressesComboBox';
import { useEffect, useState } from 'react';
import { addOrder, createOrder, createTransaction } from '../api/api';
import { useSession } from '@inrupt/solid-ui-react';
import { Product } from '../shared/shareddtypes';
import { VoidExpression } from 'typescript';
import { CircularProgress } from '@mui/material';


const steps = ['Dirección de envío', 'Detalles de pago', 'Resumen de pedido'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export type RemoveCart = {
    emptyCart :() => void;
  }

export default function Checkout(props:RemoveCart) {
  const [activeStep, setActiveStep] = React.useState(0);
  const[validation, setValidation]= React.useState("");
  const [transaction,setTransaction] = useState<any>();
  const [order,setOrder] = useState<any>();
  const { session } = useSession();
  const [loading, setLoading]=useState(false);

  const handleNext = async () => {
      if(activeStep===0 && !isSelected()){
        setValidation("Selecciona una dirección");
      } else if(activeStep===0 && isSelected()){
        setValidation("");
         setLoading(true);
         let order=await createOrder(JSON.parse(localStorage.getItem("address")!));
         console.log(order);
         localStorage.setItem("order", JSON.stringify(order));
         setOrder(order);
         setActiveStep(activeStep + 1);
         setLoading(false);
         setValidation("");
         } 
     else if(activeStep===1 && !checkFields()){
        setValidation("Campos inválidos");
         }
         else if(activeStep===steps.length-1){
        setValidation("");
        setLoading(true);
         let transaction1=await createTransaction(order["rates"][0]["object_id"]);
         setTransaction(transaction1);
         props.emptyCart();
         setActiveStep(activeStep + 1);
         setLoading(false);
         setValidation("");
         confirmOrder(transaction1);
            
      }
      else{
        setValidation("");  
        setActiveStep(activeStep + 1);
      }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setValidation("");
  };

  function getURL():string{
    if(transaction != undefined){
      return transaction["tracking_url_provider"];
  } else {
  return "0";
  }
  }
  
    
    async function confirmOrder(transaction:any){
        let url=transaction["tracking_url_provider"];
        let precio=parseFloat(localStorage.getItem("precioFinal")!);
        let products=JSON.parse(localStorage.getItem("cartProducts")!);
        addOrder(products,precio,url,session.info.webId!);
     }
 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por tu pedido.
                </Typography>
                <Typography variant="subtitle1">
                  Puedes realizar el seguimiento de tu envío <a href={getURL()} target="_blank">aquí</a>. También encontrarás este enlace en la sección "Mis pedidos".
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                
                <Typography color="red" sx={{ mt: 4, mr: 22 }}>{validation}</Typography>
                {loading && (
                   <CircularProgress sx={{ mt: 4, mr: 2 }} color="inherit" size={20}/>
                  )}
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Atrás
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Realizar pedido' : 'Siguiente'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}