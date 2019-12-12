import { RECIEVE_CHATS, SEND_CHATS } from "../constants/chatActionTypes";
import { List } from "immutable";

const initState = [
  { from: "eddie", msg: "hi" },
  { from: "john", msg: "hi" },
  { from: "sam", msg: "hi" }
];

export default function chats(state = initState, action) {
  switch (action.type) {
    case RECIEVE_CHATS:
      return List(state)
        .push(...action.value)
        .toArray();
    case SEND_CHATS:
      const newState = [...state];
      newState.push(action.value);

      return newState; 
    default:
      return state;
  }
}
