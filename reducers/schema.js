import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Administrator.schema.FULFILLED]: (state, action) => action.payload.data,
  [models.Member.schema.FULFILLED]: (state, action) => action.payload.data,
  [models.Category.schema.FULFILLED]: (state, action) => action.payload.data,
  [models.Offer.schema.FULFILLED]: (state, action) => action.payload.data,
  [models.Comment.schema.FULFILLED]: (state, action) => action.payload.data,
  [models.Rating.schema.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
