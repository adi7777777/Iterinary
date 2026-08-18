import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

function CostTable() {

  return (

    <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>

      <Table sx={{ minWidth: 320 }}>

        <TableHead sx={{ background: 'linear-gradient(90deg,#6d7bf2,#9a73d6)', color: 'white' }}>

          <TableRow>

            <TableCell>

              <Typography fontWeight="bold" sx={{ color: 'white' }}>
                Expense
              </Typography>

            </TableCell>

            <TableCell>

              <Typography fontWeight="bold" sx={{ color: 'white' }}>
                Amount
              </Typography>

            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          <TableRow hover>

            <TableCell>Stay</TableCell>

            <TableCell>₹7000</TableCell>

          </TableRow>

          <TableRow hover>

            <TableCell>Travel</TableCell>

            <TableCell>₹4000</TableCell>

          </TableRow>

          <TableRow hover>

            <TableCell>Food</TableCell>

            <TableCell>₹2500</TableCell>

          </TableRow>

          <TableRow hover>

            <TableCell>Activities</TableCell>

            <TableCell>₹1000</TableCell>

          </TableRow>

          <TableRow sx={{ background: 'rgba(0,0,0,0.02)' }}>

            <TableCell>

              <Typography fontWeight="bold">Total</Typography>

            </TableCell>

            <TableCell>

              <Typography fontWeight="bold" sx={{ color: '#6d7bf2' }}>
                ₹14500
              </Typography>

            </TableCell>

          </TableRow>

        </TableBody>

      </Table>

    </TableContainer>

  );

}

export default CostTable;