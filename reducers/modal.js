import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'
export const INITIAL_STATE = {
  isOpen: false,
  children: null,
};

export default handleActions({
  [models.Modal.open]: (state, action) => ({
    isOpen: true,
    children: action.payload,
  }),
  [models.Modal.close]: (state, action) => INITIAL_STATE,
}, INITIAL_STATE);
