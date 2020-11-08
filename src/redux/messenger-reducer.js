const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Kirill" },
  ],
  messages: [
    { id: 1, message: "Hello, Dima" },
    { id: 2, message: "Hello, Oleg" },
    { id: 3, message: "Hello, Sveta" },
    { id: 4, message: "Hello, Sasha" },
    { id: 5, message: "Hello, Kirill" },
  ],
  newMessageBody: "",
};

const messengerReducer = (state = initialState, action) => {
  let stateCopy = { ...state, messages: [...state.messages] };
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      stateCopy.newMessageBody = action.newMessBody;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let messageBody = stateCopy.newMessageBody;
      stateCopy.messages.push({ id: 5, message: messageBody });
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessBody: body,
  };
};

export default messengerReducer;
