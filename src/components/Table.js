import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import LoadingSpinner from './LoadingSpinner';

// MUI
import Button from '@material-ui/core/Button';
import MUITable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getData, deleteData } from '../redux/actions/dataActions';

const useStyles = makeStyles((theme) => ({}));

export default function Table() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getData());
    console.log(data);
  }, []);

  const handleClick = (id) => {
    dispatch(deleteData(id));
  };

  return (
    <>
      {data.loading ? (
        <LoadingSpinner loading={true} />
      ) : data.data.length === 0 ? (
        <p>Yay! We don't have to shop! Let's watch Once Upon A Time!</p>
      ) : (
        <TableContainer component={Paper}>
          <MUITable className={classes.table} aria-label='simple table'>
            {/* <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead> */}
            <TableBody>
              {data.data.map((row) => (
                <TableRow key={row.groceryId}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>
                    <Button onClick={handleClick.bind(this, row.groceryId)}>
                      <DeleteIcon color='error' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MUITable>
        </TableContainer>
      )}
    </>
  );
}
