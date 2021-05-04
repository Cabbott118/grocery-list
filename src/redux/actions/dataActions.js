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
  // dispatch({ type: DATA_LOADING });
  axios
    .post(
      'https://us-central1-grocery-list-20e09.cloudfunctions.net/api/postGrocery',
      data
    )
    .then((res) => {
      dispatch({ type: ADD_DATA, payload: res.data });
    });
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
