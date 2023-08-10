import './App.css';
import { useIsTelegramWebAppReady,  useTelegramWebApp} from "react-telegram-webapp";
import React from "react";
import clsx from "clsx";
import {Header} from './Header/Header';


function App() {
    const isReady = useIsTelegramWebAppReady();
    const tgApp = useTelegramWebApp();


    return (
        <div style={{color: isReady ? "green" : "black"}}>Work
        <pre
            style={{
                display: "block",
                wordWrap: "break-word",
                width: "300px",
                overflowWrap: "break-word"
            }}
        >
          {JSON.stringify(tgApp)}
        </pre>
         {/*   <div>{tgApp.initDataUnsafe?.user?.id}</div>*/}

        </div>
    );
}

export default App;
