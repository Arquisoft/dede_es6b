import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pedido } from '../../shared/shareddtypes';
import { getPedidos } from '../../api/api';
import { useSession } from '@inrupt/solid-ui-react';




export default function Pedidos() {
  
  const [pedidos, setPedidos] = React.useState<Pedido[]>([]);
  const { session } = useSession();

  const refreshPedidosList = async () => {
    setPedidos(await getPedidos());
  }

  React.useEffect(() => {
    refreshPedidosList();
  }, []);


  

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell><b>Código Pedido</b></TableCell>
            <TableCell align="left"><b>Precio</b></TableCell>
            <TableCell align="left"><b>URL de seguimiento</b></TableCell>
            <TableCell align="left"><b>Fecha</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {pedidos.filter((p) => p.user_id === session.info.webId!).reverse().map((pedido) => (
            <TableRow
              key={pedido.code_order}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{pedido.code_order}</TableCell>
              <TableCell align="left">{pedido.price}€</TableCell>
              {/* 
  // @ts-ignore */}
              <TableCell align="left"><a href={pedido.url!} target="_blank" >{pedido.url!}</a></TableCell>
              <TableCell align="left">{pedido.date}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
