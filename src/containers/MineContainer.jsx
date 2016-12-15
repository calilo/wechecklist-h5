import { connect } from 'react-redux';
import Mine from '../components/mine/Mine.jsx';

const mapStateToProps = (state) => {
  return {
    userId: state.mine.userId,
    headUrl: state.mine.headUrl,
    name: state.mine.name,
    friendCount: state.mine.friendCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);