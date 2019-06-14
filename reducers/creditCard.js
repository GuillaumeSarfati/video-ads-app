import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = null;

export default handleActions({
  [models.CreditCard.set]: (state, action) => action.payload,
}, INITIAL_STATE);
