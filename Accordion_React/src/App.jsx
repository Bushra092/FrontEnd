import "./App.css";
import AccordiantUI from "./components/AccordiantUI";

import data from "./components/data";

function App() {
  console.log(data);
  return (
    <div className="container">
      <h1>FAQ</h1>
      {data.map((accdata) => {
        return (
          <AccordiantUI
            key={accdata.id}
            title={accdata.title}
            info={accdata.info}
          />
        );
      })}
    </div>
  );
}

export default App;
