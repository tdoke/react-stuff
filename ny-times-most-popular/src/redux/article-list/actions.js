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

export const fetchArticles = () => {
  return dispatch => {
    dispatch(fetchArticlesStart())
    apiService
      .get(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=lxGWJ2qWmub93OwajwWfUhlu0FIRaLfk`)
      .then(response => {
        console.log(response);
        dispatch(fetchArticlesSuccess(response.data.results))
      })
      .catch(error => dispatch(fetchArticlesFailed(error)))
  }
}
