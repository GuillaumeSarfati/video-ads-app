import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.Article.find.FULFILLED]: (state, action) => action.payload.data,
  [models.Article.findById.FULFILLED]: (state, action) => [action.payload.data],
  [models.Article.findOne.FULFILLED]: (state, action) => [action.payload.data],
}, INITIAL_STATE);
