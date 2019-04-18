import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Member.findById.FULFILLED]: (state, action) => action.payload.data,
  [models.Member.findOne.FULFILLED]: (state, action) => action.payload.data,
  [models.Member.patchAttributes.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
