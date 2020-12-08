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
};

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let messageBody = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: messageBody }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageAC = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
// export const updateNewMessageBodyAC = (body) => {
//   return {
//     type: UPDATE_NEW_MESSAGE_BODY,
//     newMessBody: body,
//   };
// };

export default messengerReducer;
