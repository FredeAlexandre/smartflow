import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard.tsx";
import Projects from './Projects';
import Documentation from './Documentation';
import Library from './Library';
import Help from './Help';

import "../app/globals.css"
import "virtual:uno.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/library" element={<Library />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
