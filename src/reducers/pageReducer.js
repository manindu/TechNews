import { GET_ARTICLES, SET_SELECTED_SOURCES, REQUEST, SUCCESS } from '../constants/types';

const initialState = {
  nextPage: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES + SUCCESS:
      return { nextPage: state.nextPage + 1 };
    case SET_SELECTED_SOURCES:
      return { nextPage: 1 };
    default:
      return state;
  }
};
