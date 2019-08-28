import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = {};

export default handleActions({
  [models.App.set]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [models.App.clear]: (state, action) => INITIAL_STATE,
}, INITIAL_STATE);
