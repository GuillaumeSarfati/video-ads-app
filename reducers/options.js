import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.Options.find.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
