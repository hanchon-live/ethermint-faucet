import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Auth0ProviderWithHistory>
                <App />
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
