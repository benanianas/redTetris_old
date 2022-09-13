import { useEffect } from 'react'
import socket  from '../utils/socket'

import './App.css'

function App() {

  useEffect(()=>{
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, [])
}

export default App
