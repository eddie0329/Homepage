import { RECIEVE_CHATS, SEND_CHATS } from '../constants/chatActionTypes';


export function recieveChats(value) {
    return {
        type: RECIEVE_CHATS,
        value,
    }
}

export function sendChats(value) {
    return {
        type: SEND_CHATS,
        value,
    }
}