import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableList = () => {
    const rows=[
        {
            id:1234513,
            product:"Ace Nitro 5",
            img:"",
            customer:"John Smith",
            date:"1 March",
            amount:786,
            method:"Cash on Delivery",
            status:"Approved",

        },
        {
            id:1134514,
            product:"PlayStation 5",
            img:"",
            customer:"Joey stanlin",
            date:"7 March",
            amount:1186,
            method:"Cash on Delivery",
            status:"Approved",

        },
        {
            id:2324501,
            product:"Redragon S101",
            img:"",
            customer:"Michael Doe",
            date:"10 April",
            amount:800,
            method:"Online",
            status:"Pending",

        },
        {
            id:1874598,
            product:"Racer Blade 15",
            img:"",
            customer:"Johny Gram",
            date:"16 May",
            amount:678,
            method:"Online",
            status:"Approved",

        },
        {
            id:4234513,
            product:"ASUS ROG Strix",
            img:"",
            customer:"John Smith",
            date:"20 May",
            amount:1200,
            method:"Cash on Delivery",
            status:"Pending",

        },
    ];
  return (
   
        <TableContainer component={Paper}className="table">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead className="tableHead">
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>

            

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow     key={row.id}            >
              <TableCell className="tableCell" >{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell> 

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default TableList