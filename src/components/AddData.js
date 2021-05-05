import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components

// MUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../redux/actions/dataActions';

const useStyles = makeStyles((theme) => ({
  form: theme.spreadThis.form,
  button: theme.spreadThis.button,
}));

export default function AddData() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    itemName: '',
  });

  const handleInputChange = (event) => {
    event.persist();
    setValues(() => ({
      itemName: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name: values.itemName };
    dispatch(addData(data));
    setValues(() => ({
      itemName: '',
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item>
            <TextField
              label='Name of Item'
              variant='outlined'
              name='itemName'
              value={values.itemName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              color='primary'
              variant='contained'
              type='submit'
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
