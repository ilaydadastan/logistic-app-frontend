import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CourierPage from "./components/CourierPage";
import CustomerPage from "./components/CustomerPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/customer" element={<CustomerPage/>}></Route>
              <Route path="/courier" element={<CourierPage/>}></Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
