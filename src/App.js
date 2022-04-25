import Header from "./components/header/header";
import Form from "./components/form/form";
import History from "./components/histroy/history";
import { useState } from "react";

function App() {
  let localData = JSON.parse(localStorage.getItem("RESTyHistory"));
  let [renderedData, setRenderedData] = useState(localData);
  const getFormDataHandler = (data) => {
    localData ? (localData = localData) : (localData = []);
    localStorage.setItem("RESTyHistory", JSON.stringify([...localData, data]));
    setRenderedData(JSON.parse(localStorage.getItem("RESTyHistory")));
  };
  return (
    <>
      <Header></Header>
      <Form getFormData={getFormDataHandler}></Form>
      <History
        getHistoryData={renderedData == null ? [] : renderedData}
      ></History>
    </>
  );
}

export default App;
