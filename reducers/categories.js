import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.Category.find.FULFILLED]: (state, action) => action.payload.data,
  [models.Category.search.FULFILLED]: (state, action) => action.payload.data,
  [models.Category.findById.FULFILLED]: (state, action) => [action.payload.data],
  [models.Category.findOne.FULFILLED]: (state, action) => [action.payload.data],
}, INITIAL_STATE);
