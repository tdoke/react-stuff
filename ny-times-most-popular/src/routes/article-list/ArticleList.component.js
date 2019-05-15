import React from 'react'


class ArticleList extends React.PureComponent {

  componentDidMount() {
    this.props.fetchArticles();
  }
  render() {
    const articles = this.props.articleList;
    return (
      <div>List Articles
        {
          JSON.stringify(articles)
        }
      </div>
    )
  }
}

export default ArticleList;
