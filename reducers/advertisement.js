import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Advertisement.findById.FULFILLED]: (state, action) => action.payload.data,
  [models.Advertisement.findOne.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
