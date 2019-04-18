import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.Rating.find.FULFILLED]: (state, action) => action.payload.data,
  [models.Rating.search.FULFILLED]: (state, action) => action.payload.data,
  [models.Rating.findById.FULFILLED]: (state, action) => [action.payload.data],
  [models.Rating.findOne.FULFILLED]: (state, action) => [action.payload.data],
}, INITIAL_STATE);
