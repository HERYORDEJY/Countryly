import { articles } from '../api/articles';
import { REMOVE_ARTICLE, SAVE_ARTICLE } from './constants';

export const ArticlesReducer = (state = [...articles], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const SavedArticleReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_ARTICLE:
      return action.savedArticles;
    case REMOVE_ARTICLE:
      return action.savedArticles;
    default:
      return state;
  }
};
