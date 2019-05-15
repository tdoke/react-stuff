import apiService from '../../services/service';

export const actionTypes = {
  FETCH_ARTICLES_START: "FETCH_ARTICLES_START",
  FETCH_ARTICLES_SUCCESS: "FETCH_ARTICLES_SUCCESS",
  FETCH_ARTICLES_FAILED: "FETCH_ARTICLES_FAILED",
};

const fetchArticlesStart = () => ({
  type: actionTypes.FETCH_ARTICLES_START
});

const fetchArticlesSuccess = articles => ({
  type: actionTypes.FETCH_ARTICLES_SUCCESS,
  payload: articles
});

const fetchArticlesFailed = () => ({
  type: actionTypes.FETCH_ARTICLES_FAILED
});

export const fetchArticles = name => {
  return dispatch => {
    dispatch(fetchArticlesStart())
    apiService
      .get(`https://swapi.co/api/planets/?search=${name}`)
      .then(response => response.data)
      .then(data => dispatch(fetchArticlesSuccess(data)))
      .catch(error => dispatch(fetchArticlesFailed(error)))
  }
}
