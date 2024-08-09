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
          <Route
            exact
            path="/business"
            element={<Newspedia category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<Newspedia category="entertainment" />}
          />
          <Route
            exact
            path="/general"
            element={<Newspedia category="general" />}
          />
          <Route
            exact
            path="/health"
            element={<Newspedia category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<Newspedia category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<Newspedia category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<Newspedia category="technology" />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Newspedia /> */}
    </>
  );
}

export default App;
