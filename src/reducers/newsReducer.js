import { GET_ARTICLES, REQUEST, SUCCESS, FAILURE } from '../constants/types';

const initialState = {
  selectedSources: ['the-next-web', 'techcrunch', 'polygon'],
  articles: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES + REQUEST:
      return { ...state, loading: true };
    case GET_ARTICLES + SUCCESS:
      return { articles: action.payload, loading: false };
    case GET_ARTICLES + FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
