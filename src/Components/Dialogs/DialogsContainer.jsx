import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  // updateNewMessageBodyAC,
  sendMessageAC,
} from "../../redux/messenger-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messengerPage: state.messengerPage,
  };
};

compose(withAuthRedirect)(Dialogs);

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapDispatchToProps = (dispatch) => {
  return {
    // updateNewMessageBody: (body) => {
    //   dispatch(updateNewMessageBodyAC(body));
    // },
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageAC(newMessageBody));
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
