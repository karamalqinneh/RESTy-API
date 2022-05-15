export const handleLocalStorage = () => {
  if (!JSON.parse(localStorage.getItem("RESTyHistory"))) {
    localStorage.setItem("RESTyHistory", JSON.stringify([]));
  }
  let localData = JSON.parse(localStorage.getItem("RESTyHistory"));
  return localData;
};

const initialState = {
  history: handleLocalStorage(),
  count: handleLocalStorage().length,
};

export default function historyReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_HISTORY":
      const count = state.count + 1;
      const history = [...state.history, payload];
      localStorage.setItem("RESTyHistory", JSON.stringify(history));
      return { count, history };
    case "GET_HISTORY":
      return [...state.history];
    case "REMOVE_HISTORY":
      const decCount = state.count - 1;
      const updatedHistoy = state.history.filter((ele) => ele !== payload);
      localStorage.setItem("RESTyHistory", JSON.stringify(updatedHistoy));
      return { count: decCount, history: updatedHistoy };
    default:
      return state;
  }
}

export const addAction = (history) => {
  return {
    type: "ADD_HISTORY",
    payload: history,
  };
};

export const removeAction = (history) => {
  return {
    type: "REMOVE_HISTORY",
    payload: history,
  };
};

export const getData = () => {
  return {
    type: "GET_HISTORY",
  };
};
