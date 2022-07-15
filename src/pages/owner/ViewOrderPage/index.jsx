import {
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import { PRIMARY_FONT } from "../../../theme/fonts";

function ViewOrder() {
  const { state } = useLocation();
  const { order_id, date, customer_id, type, total_amount, order_status } =
    state;

  const phone_number = "0714079171";
  const address = "21/A, Issadeen Town, Matara";

  const order_item = [
    {
      item_id: "1234",
      name: "Apple I phone X 32 GB Red Color",
      quantity: 2,
      unit_price: 34.67,
    },
    {
      item_id: "9980",
      name: "Samsung Galaxy A6 Plus 32 GB Black Color",
      quantity: 6,
      unit_price: 678.0,
    },
    {
      item_id: "4567",
      name: "Apple I phone X 32 GB Black Color",
      quantity: 3,
      unit_price: 20.0,
    },
  ];

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const rows = order_item.map((item) =>
    createRow(item.name, item.quantity, item.unit_price)
  );

  const invoiceSubtotal = subtotal(rows);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // width: "100%",
        padding: 5,
        // maxHeight: "100%",
      }}
    >
      <Paper elevation={3} sx={{ maxHeight: "100%", padding: 5 }}>
        <Divider sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}>
          Customer Details
        </Divider>

        <br />

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Phone Number: <b>{phone_number}</b>
        </Typography>

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Address: <b>{address}</b>
        </Typography>
        <br />
        <Divider sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}>
          Order Details
        </Divider>
        <br />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Typography
            sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
            color="text.secondary"
            gutterBottom
          >
            Order ID: <b>{order_id}</b>
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
            color="text.secondary"
            gutterBottom
          >
            Date: <b>{date}</b>
          </Typography>
        </Stack>

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Order Type: <b>{type}</b>
        </Typography>

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Total Amount: <b>{total_amount}</b>
        </Typography>

        <Typography
          sx={{ fontSize: 16, fontFamily: PRIMARY_FONT }}
          color="text.secondary"
          gutterBottom
        >
          Status: <b>{order_status}</b>
        </Typography>
        <br />
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ fontFamily: PRIMARY_FONT }}>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Delivery Fee</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{ccyFormat(400)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(total_amount)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default ViewOrder;
