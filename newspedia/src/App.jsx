import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Newspedia from "./component/Newspedia";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Newspedia />} />
        </Routes>
      </BrowserRouter>
      {/* <Newspedia /> */}
    </>
  );
}

export default App;
