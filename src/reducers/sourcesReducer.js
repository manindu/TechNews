import { SET_SELECTED_SOURCES } from '../constants/types';

const initialState = {
  selectedSources: ['the-next-web', 'techcrunch', 'polygon'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SOURCES:
      return { selectedSources: action.payload };
    default:
      return state;
  }
};
