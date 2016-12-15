import { connect } from 'react-redux';
import Checklist from '../components/checklist/ChecklistDetail.jsx';
import { finishChecklist, gotoChecklist } from '../creators/checklist_creator.jsx';

const mapStateToProps = (state) => {
  return {
    id: state.checklist.chosen.id,
    author: state.checklist.chosen.author,
    title: state.checklist.chosen.title,
    description: state.checklist.chosen.description,
    pictures: state.checklist.chosen.pictures,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    finishItem: (id) => dispatch(finishChecklist({id})),
    goBack: () => dispatch(gotoChecklist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);