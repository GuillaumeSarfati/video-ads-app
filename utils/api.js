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
    // baseURL: 'http://development.popeye.com:3000/api',
    baseURL: `https://pop-eye-api-core.herokuapp.com/api`,
    withCredentials: true,
    ...config
  });
}

export const Models = axios.create({
  // baseURL: 'http://development.popeye.com:3000/models',
  baseURL: `http://dev.popeye.com:3000/models`,
  withCredentials: true,
});

export default Api();
