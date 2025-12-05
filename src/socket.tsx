import { io } from "socket.io-client";
const URL = import.meta.env.PROD
  ? import.meta.env.VITE_BACKEND_URL
  : "http://localhost:3000"; // If import.meta.env.PROD is true, then you are in production. Otherwise just use localhost

export const socket = io(URL, {
  autoConnect: false,
});
