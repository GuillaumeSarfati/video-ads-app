import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = {
  isLoading: 0,
};

export default handleActions({

  [models.Pack.buy.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.CreditCard.create.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Member.patchAttributesById.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Offers.patchAttributesById.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Offers.create.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Offers.find.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Comment.create.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Rating.create.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),

  [models.Pack.buy.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.CreditCard.create.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Member.patchAttributesById.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.patchAttributesById.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.create.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.find.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Comment.create.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Rating.create.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),

  [models.Pack.buy.REJECTED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.CreditCard.create.REJECTED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Member.patchAttributesById.REJECTED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.patchAttributesById.REJECTED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.create.REJECTED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.find.REJECTED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Comment.create.REJECTED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Rating.create.REJECTED]: (state, action) => ({ isLoading: state.isLoading - 1 }),

}, INITIAL_STATE);
