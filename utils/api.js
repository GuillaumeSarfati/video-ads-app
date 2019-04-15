import axios from 'axios';
import { createAction as createReduxAction } from 'redux-actions';

export const createAction = createReduxAction;

export const generateApiAction = define => ({
  DEFINE: define,
  PENDING: `${define}_PENDING`,
  REJECTED: `${define}_REJECTED`,
  FULFILLED: `${define}_FULFILLED`,
});

export const createApiAction = ({ DEFINE }) => {
  const action = (payload, meta) => ({
    type: DEFINE,
    payload,
    meta,
  });
  return action;
};

export const Api = config => {
  return axios.create({
    baseURL: process.env.API_URL || `http://localhost:3000/api`,
    withCredentials: true,
    ...config
  });
}

export const Models = axios.create({
  baseURL: (process.env.API_URL || `http://localhost:3000/api`).replace('/api', '/models'),
  withCredentials: true,
});

export default Api();
