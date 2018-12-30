import { GET_ARTICLES, SET_SELECTED_SOURCES, REQUEST, SUCCESS, FAILURE } from '../constants/types';

const initialState = {
  articles: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES + REQUEST:
      return { ...state, loading: true };
    case GET_ARTICLES + SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...action.payload.articles],
        loading: false,
      };
    case GET_ARTICLES + FAILURE:
      return { ...state, loading: false };
    case SET_SELECTED_SOURCES:
      return initialState;
    default:
      return state;
  }
};
