import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import { TelegramWebApp } from "react-telegram-webapp";

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
async function validateHash(hash) {
    //alert(hash);
    return true;
    const response = await fetch(`/api/validate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ hash })
    });
    return response.ok;
}
*/

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);