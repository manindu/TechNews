import { GET_ARTICLES, REQUEST, SUCCESS } from '../constants/types';

const initialState = {
  nextPage: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES + SUCCESS:
      return { nextPage: state.nextPage + 1 };
    default:
      return state;
  }
};
