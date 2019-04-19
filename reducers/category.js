import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Category.set]: (state, action) => action.payload,
  [models.Category.findById.FULFILLED]: (state, action) => action.payload.data,
  [models.Category.findOne.FULFILLED]: (state, action) => action.payload.data,
  [models.Category.patchAttributes.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
