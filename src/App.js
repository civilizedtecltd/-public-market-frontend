import React from 'react';
import AppRoutes from './Routes/AppRoutes';
import { BrowserRouter } from "react-router-dom"; 
import ScrollToTop from "./Routes/ScrollToTop"


function App() {
 

  return (
    <>
      <BrowserRouter>
         <ScrollToTop />
         <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
