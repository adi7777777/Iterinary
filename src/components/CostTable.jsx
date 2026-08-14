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

    <TableContainer
      component={Paper}
      elevation={2}
    >

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>

              <Typography
                fontWeight="bold"
              >
                Expense
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                fontWeight="bold"
              >
                Amount
              </Typography>

            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          <TableRow>

            <TableCell>
              Stay
            </TableCell>

            <TableCell>
              ₹7000
            </TableCell>

          </TableRow>

          <TableRow>

            <TableCell>
              Travel
            </TableCell>

            <TableCell>
              ₹4000
            </TableCell>

          </TableRow>

          <TableRow>

            <TableCell>
              Food
            </TableCell>

            <TableCell>
              ₹2500
            </TableCell>

          </TableRow>

          <TableRow>

            <TableCell>
              Activities
            </TableCell>

            <TableCell>
              ₹1000
            </TableCell>

          </TableRow>

          <TableRow>

            <TableCell>

              <Typography
                fontWeight="bold"
              >
                Total
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                fontWeight="bold"
                color="primary"
              >
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