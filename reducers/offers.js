import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = [];

export default handleActions({
  [models.Offer.find.FULFILLED]: (state, action) => action.payload.data,
  [models.Offer.search.FULFILLED]: (state, action) => action.payload.data,
  [models.Offer.findById.FULFILLED]: (state, action) => [action.payload.data],
  [models.Offer.patchAttributesById.FULFILLED]: (state, action) => state.map(offer => {
    return offer.id === action.payload.data.id
      ? { ...offer, ...action.payload.data }
      : offer
  }),
}, INITIAL_STATE);
