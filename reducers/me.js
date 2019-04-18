import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Administrator.set]: (state, action) => action.payload,
  [models.Administrator.login.FULFILLED]: (state, action) => action.payload.me,
  [models.Administrator.signup.FULFILLED]: (state, action) => action.payload.me,
}, INITIAL_STATE);
