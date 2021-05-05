import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components

// MUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../redux/actions/dataActions';

const useStyles = makeStyles((theme) => ({
  button: theme.spreadThis.button,
}));

export default function AddData() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    itemName: '',
  });

  const handleInputChange = (event) => {
    // event.persist();
    setValues(() => ({
      itemName: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = values.itemName;
    dispatch(addData(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Name of Item'
          variant='outlined'
          name='itemName'
          value={values.itemName}
          onChange={handleInputChange}
        />
        <Button
          className={classes.button}
          color='primary'
          variant='contained'
          type='submit'
        >
          Add Item
        </Button>
      </form>
    </>
  );
}
