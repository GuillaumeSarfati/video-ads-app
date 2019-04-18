import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.Comment.find.FULFILLED]: (state, action) => action.payload.data,
  [models.Comment.search.FULFILLED]: (state, action) => action.payload.data,
  [models.Comment.findById.FULFILLED]: (state, action) => [action.payload.data],
  [models.Comment.findOne.FULFILLED]: (state, action) => [action.payload.data],
}, INITIAL_STATE);
