import Header from "./components/header/header";
import Form from "./components/form/form";
import History from "./components/histroy/history";
import Results from "./components/results/results";
import { useState } from "react";

function App() {
  let [resultsData, setRestultsData] = useState("");
  let localData = JSON.parse(localStorage.getItem("RESTyHistory"));
  let [renderedData, setRenderedData] = useState(localData);
  const getFormDataHandler = (data) => {
    localData ? (localData = localData) : (localData = []);
    localStorage.setItem("RESTyHistory", JSON.stringify([...localData, data]));
    setRestultsData(data);
    setRenderedData(JSON.parse(localStorage.getItem("RESTyHistory")));
  };
  return (
    <>
      <Header></Header>
      <Form getFormData={getFormDataHandler}></Form>
      <div style={{ display: "flex" }}>
        <History
          getHistoryData={renderedData == null ? [] : renderedData}
        ></History>
        <Results getResultsData={resultsData}></Results>
      </div>
    </>
  );
}

export default App;
