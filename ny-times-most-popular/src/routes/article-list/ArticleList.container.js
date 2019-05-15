import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleListComponent from './ArticleList.component'

const mapStateToProps = (state) => ({
  articleList: state.articleList,
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);
