import {io} from "socket.io-client";

const socket = io(import.meta.env.DEV ? '/' : import.meta.env.VITE_API_URL);

export default socket