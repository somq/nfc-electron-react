import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nfc from '../components/Nfc';
import * as NfcActions from '../actions/nfc';

function mapStateToProps(state) {
  return {
    nfc: state.nfc
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NfcActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nfc);
