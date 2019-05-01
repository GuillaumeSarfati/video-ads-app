import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Member.set]: (state, action) => action.payload,
  [models.Member.update]: (state, action) => ({ ...state, ...action.payload }),
  [models.Member.login.FULFILLED]: (state, action) => action.payload.data.me,
  [models.Member.signup.FULFILLED]: (state, action) => action.payload.data.me,
  [models.Member.facebook.FULFILLED]: (state, action) => action.payload.data.me,
  [models.Member.clear]: (state, action) => INITIAL_STATE,
}, INITIAL_STATE);
