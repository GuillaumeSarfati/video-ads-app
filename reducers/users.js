import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.User.findById.FULFILLED]: (state, action) => [action.payload.data],
  [models.User.findOne.FULFILLED]: (state, action) => [action.payload.data],
  [models.User.find.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
