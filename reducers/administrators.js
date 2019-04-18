import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.Administrator.find.FULFILLED]: (state, action) => action.payload.data,
  [models.Administrator.search.FULFILLED]: (state, action) => action.payload.data,
  [models.Administrator.findById.FULFILLED]: (state, action) => [action.payload.data],
  [models.Administrator.findOne.FULFILLED]: (state, action) => [action.payload.data],
}
,INITIAL_STATE);
