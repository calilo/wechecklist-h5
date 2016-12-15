import { connect } from 'react-redux';
import Checklist from '../components/checklist/Checklist.jsx';
import { fetchChecklists } from '../creators/checklist_creator.jsx';

const mapStateToProps = (state) => {
  return {
    checklists: state.checklist.checklists,
    isLoading: state.checklist._isLoading,
    nextStart: state.checklist._nextStart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMore: (start) => dispatch(fetchChecklists({start}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);