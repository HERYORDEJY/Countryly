import { REMOVE_ARTICLE, SAVE_ARTICLE } from './constants';
import { compareValues } from '../utils/compare-values';

export const SaveArticleAction = (savedArticles, articleID) => {
  let saved = [...savedArticles, articleID];
  const uniqueData = saved.sort(compareValues('id', 'ascending'));
  return {
    type: SAVE_ARTICLE,
    savedArticles: uniqueData,
  };
};

export const RemoveArticleAction = (savedArticles, articleID) => {
  let updateArticles = savedArticles.filter(
    (article) => article.id !== articleID,
  );
  const uniqueData = updateArticles.sort(compareValues('id', 'ascending'));
  return {
    type: REMOVE_ARTICLE,
    savedArticles: uniqueData,
  };
};
