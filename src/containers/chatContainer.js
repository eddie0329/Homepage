import { connect } from "react-redux";
import AffixDiaglog from "../components/AffixDiaglog";

const mapStateToProps = state => {
  return {
    chats: state.chatReducer,
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AffixDiaglog);
