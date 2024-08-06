import React from'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageFinal from './components/PageFinal';
import ResultPage from './components/ResultPage';

import "./App.css"; 

function App() {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/page2" element={<PageTwo />} />
          <Route path="/page3" element={<PageFinal />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </FormProvider>
    </Router>
  );
}

export default App; 