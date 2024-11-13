// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VirtualAssistant from '../pages/virtual assistant/virtualAssistant';
import Home from '../pages/home/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/virtual-assistant" element= {<VirtualAssistant/>} />
    </Routes>
  );
};

export default AppRoutes;
