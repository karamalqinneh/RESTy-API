import Form from "./form/form";
import History from "./histroy/history";
import Results from "./results/results";
import historyReducer, {
  addAction,
  removeAction,
  handleLocalStorage,
} from "../Reducer";
import { useState, useReducer } from "react";

const initialState = {
  history: handleLocalStorage(),
  count: handleLocalStorage().length,
};

function Main(props) {
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
    <>
      <Form getFormData={getFormDataHandler}></Form>
      <div style={{ display: "flex" }}>
        <History
          getHistoryData={historyState.history}
          updateHistoryData={deleteElementFromHistoryHandler}
        ></History>
        <Results getResultsData={resultsData}></Results>
      </div>
    </>
  );
}

export default Main;
