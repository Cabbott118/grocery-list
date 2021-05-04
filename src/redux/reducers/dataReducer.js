import { DATA_LOADING, DATA_LOADED, ADD_DATA, DATA_DELETED } from '../types';

const initialState = {
  loading: false,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DATA_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ADD_DATA:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case DATA_DELETED:
      return {
        ...state,
        data: state.data.filter((item) => item.groceryId !== action.payload),
      };
    default:
      return state;
  }
}
