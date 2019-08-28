import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.Member.find.FULFILLED]: (state, action) => action.payload.data,
  [models.Member.search.FULFILLED]: (state, action) => action.payload.data,
  [models.Member.findById.FULFILLED]: (state, action) => [action.payload.data],
  [models.Member.findOne.FULFILLED]: (state, action) => [action.payload.data],
}
,INITIAL_STATE);
