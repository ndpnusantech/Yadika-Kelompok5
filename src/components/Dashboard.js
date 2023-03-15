import React from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const data = [
    { month: "Jan", pemasukan: 0, pengeluaran: 0 },
    { month: "Feb", pemasukan: 0, pengeluaran: 0 },
    { month: "Mar", pemasukan: 750.000, pengeluaran: 0 },
    { month: "Apr", pemasukan: 0, pengeluaran: 0 },
    { month: "May", pemasukan: 0, pengeluaran: 0 },
    { month: "Jun", pemasukan: 0, pengeluaran: 0 },
    { month: "Jul", pemasukan: 0, pengeluaran: 0 },
    { month: "Aug", pemasukan: 0, pengeluaran: 0 },
    { month: "Sep", pemasukan: 0, pengeluaran: 0 },
    { month: "Oct", pemasukan: 0, pengeluaran: 0 },
    { month: "Nov", pemasukan: 0, pengeluaran: 0 },
    { month: "Dec", pemasukan: 0, pengeluaran: 0 },
  ];
  

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Graph 1
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pemasukan"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="pengeluaran" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Graph 2
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="pemasukan" fill="#8884d8" />
              <Bar dataKey="pengeluaran" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
