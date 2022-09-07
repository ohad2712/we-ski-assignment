// This file would be in use by the search element via the UI
// to handle 'search' events emitted from the server
import socketIOClient from 'socket.io-client';
import {baseURL} from '../api';

export const socket = socketIOClient(baseURL);

export default function searchSocket(callback) {
    socket.on('search', data => {
        callback(data);
    });

    return () => socket.disconnect();
}
