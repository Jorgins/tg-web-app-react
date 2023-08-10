import './App.css';
import { useIsTelegramWebAppReady,  useTelegramWebApp} from "react-telegram-webapp";
import React from "react";
import clsx from "clsx";
import {Header} from './Header/Header';
import { TelegramWebApp } from "react-telegram-webapp";


function App() {
    const isReady = useIsTelegramWebAppReady();
    const tgApp = useTelegramWebApp();

    console.log('TelegramWebApp',TelegramWebApp)
    return (
        <div style={{color: isReady ? "green" : "black"}}>Work
        <pre
            style={{
                border: "solid 1px #000",
                display: "block",
                wordWrap: "break-word",
                width: "300px",
                overflowWrap: "break-word"
            }}
        >
          {JSON.stringify(TelegramWebApp)}
        </pre>
         {/*   <div>{tgApp.initDataUnsafe?.user?.id}</div>*/}

        </div>
    );
}

export default App;
