import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Comment.findById.FULFILLED]: (state, action) => action.payload.data,
  [models.Comment.findOne.FULFILLED]: (state, action) => action.payload.data,
  [models.Comment.patchAttributes.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
