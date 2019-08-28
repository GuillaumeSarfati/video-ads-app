import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Administrator.findById.FULFILLED]: (state, action) => action.payload.data,
  [models.Administrator.findOne.FULFILLED]: (state, action) => action.payload.data,
  [models.Administrator.patchAttributes.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
