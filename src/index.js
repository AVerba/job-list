import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'components/App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import ContextWrapper from "./context/ContextWrapper";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter basename="/job-list">
        <App/>
      </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>
);
