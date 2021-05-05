import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';

// Components
import AddData from '../components/AddData';
import Table from '../components/Table';

const useStyles = makeStyles((theme) => ({
  grid: theme.spreadThis.grid,
  gridItem: theme.spreadThis.gridItem,
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction='column'
        justify='space-between'
        alignItems='stretch'
        className={classes.grid}
      >
        <Grid item className={classes.gridItem}>
          <AddData />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Table />
        </Grid>
      </Grid>
    </>
  );
}
