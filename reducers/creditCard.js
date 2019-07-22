import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.CreditCard.set]: (state, action) => action.payload,
  [models.CreditCard.create.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);
