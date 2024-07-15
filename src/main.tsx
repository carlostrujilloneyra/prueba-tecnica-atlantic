import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./pokemon/libs/services/store/store";
import { UserProvider } from "./pokemon/libs/services/context/UserProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <UserProvider>
          <App />
        </UserProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
