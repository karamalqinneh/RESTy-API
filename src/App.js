import Header from "./components/header/header";
import Form from "./components/form/form";
import History from "./components/histroy/history";
import Results from "./components/results/results";
import historyReducer, {
  addAction,
  removeAction,
  handleLocalStorage,
} from "./Reducer";
import { useState, useReducer } from "react";

const initialState = {
  history: handleLocalStorage(),
  count: handleLocalStorage().length,
};

function App() {
  const [historyState, dispatch] = useReducer(historyReducer, initialState);
  let [resultsData, setRestultsData] = useState("");
  const getFormDataHandler = (data) => {
    dispatch(addAction(data));
    setRestultsData(data);
  };

  const deleteElementFromHistoryHandler = (data) => {
    dispatch(removeAction(data));
    setRestultsData(data);
  };

  return (
    <div style={{ width: "99.3vw", overflow: "hidden" }}>
      <Header></Header>
      <Form getFormData={getFormDataHandler}></Form>
      <div style={{ display: "flex" }}>
        <History
          getHistoryData={historyState.history}
          updateHistoryData={deleteElementFromHistoryHandler}
        ></History>
        <Results getResultsData={resultsData}></Results>
      </div>{" "}
    </div>
  );
}

export default App;
