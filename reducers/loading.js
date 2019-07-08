import { handleActions } from 'redux-actions';
import { models } from 'utils/connect'

export const INITIAL_STATE = {
  isLoading: 0,
};

export default handleActions({

  [models.Member.patchAttributesById.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Offers.patchAttributesById.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Offers.create.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Offers.find.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Comment.create.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),
  [models.Rating.create.PENDING]: (state, action) => ({ isLoading: state.isLoading + 1 }),

  [models.Member.patchAttributesById.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.patchAttributesById.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.create.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Offers.find.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Comment.create.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),
  [models.Rating.create.FULFILLED]: (state, action) => ({ isLoading: state.isLoading - 1 }),

}, INITIAL_STATE);
