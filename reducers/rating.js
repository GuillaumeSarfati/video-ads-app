import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Rating.findById.FULFILLED]: (state, action) => action.payload.data,
  [models.Rating.findOne.FULFILLED]: (state, action) => action.payload.data,
  [models.Rating.patchAttributes.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
