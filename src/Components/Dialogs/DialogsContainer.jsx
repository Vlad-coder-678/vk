import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/messenger-reducer";

let mapStateToProps = (state) => {
  return {
    messengerPage: state.messengerPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
