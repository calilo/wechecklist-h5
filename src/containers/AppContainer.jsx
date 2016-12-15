import { connect } from 'react-redux';
import App from '../components/App.jsx';
import { choseItem } from '../creators/app_creator.jsx';

const mapStateToProps = (state) => {
  return {
    chosenMenuItem: state.app.chosenMenuItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChosenMenuItem: (id) => dispatch(choseItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);