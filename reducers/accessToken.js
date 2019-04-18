import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Administrator.login.FULFILLED]: (state, action) => action.payload.accessToken,
  [models.Administrator.signup.FULFILLED]: (state, action) => action.payload.accessToken,
}, INITIAL_STATE);
