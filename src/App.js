import './App.css';
import {
    useIsTelegramWebAppReady,
    useTelegramWebApp
} from "react-telegram-webapp";
import React from "react";
import clsx from "clsx";
//window.Telegram.WebApp.onEvent
const tg=window.Telegram.WebApp;

function App() {
/*
    useEffect( ()=>{
        tg.ready();
    },[]);*/
    
    const onClose =()=>{
        tg.close()
    } 

  return (
    <div className="App">
        work
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
