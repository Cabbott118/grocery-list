import axios from 'axios';
import { returnErrors } from './errorActions';
import { DATA_LOADING, DATA_LOADED, ADD_DATA, DATA_DELETED } from '../types';

export const getData = () => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  axios
    .get(
      `https://us-central1-grocery-list-20e09.cloudfunctions.net/api/groceries`
    )
    .then((res) => {
      dispatch({ type: DATA_LOADED, payload: res.data });
    });
};

export const addData = (data) => (dispatch) => {
  axios
    .post(
      'https://us-central1-grocery-list-20e09.cloudfunctions.net/api/postGrocery',
      { name: data }
    )
    .then((res) => {
      dispatch({ type: ADD_DATA, payload: res.data });
      console.log('DISPATCH - ADD_DATA:', data);
    })
    .catch((err) => console.log('Erroring Here: ', err));
};

export const deleteData = (id) => (dispatch) => {
  axios
    .delete(
      `https://us-central1-grocery-list-20e09.cloudfunctions.net/api/grocery/${id}`
    )
    .then((res) => {
      dispatch({ type: DATA_DELETED, payload: id });
    });
};
