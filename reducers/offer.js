import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.Offer.setOne]: (state, action) => action.payload,
  [models.Offer.findById.FULFILLED]: (state, action) => action.payload.data,
  [models.Offer.findOne.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
