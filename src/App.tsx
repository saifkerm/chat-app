import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ConversationPage } from './pages/ConversationPage';
import {ConversationChannelPage} from "./pages/ConversationChannelPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="conversations" element={<ConversationPage />}>
              <Route path=":id" element={<ConversationChannelPage />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
