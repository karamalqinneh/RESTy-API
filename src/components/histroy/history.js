import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import historyReducer, { getData, handleLocalStorage } from "../../Reducer";
import { useReducer } from "react";

const Container = styled.ul`
height 40vh;
width: 40vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
overflow-y: auto;
`;

const EndPoint = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  height: 3rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    border: 3px solid red;
    padding: 0.25rem;
  }
`;

const Method = styled.div`
  border-radius: 5px;
  color: #fff;
  display: flex;
  font-weight: 700;
  padding: 0.25rem 1rem;
  background: #00f;
  justify-content: center;
  align-items: center;
`;

const initialState = [...handleLocalStorage()];
function History(props) {
  const [historyState, dispatch] = useReducer(historyReducer, initialState);

  const deleteHandler = (ele) => {
    props.updateHistoryData(ele);
  };
  console.log(historyState, "##############");
  let alternativeData = historyState.map((ele) => {
    return (
      <EndPoint key={uuidv4()} onClick={() => deleteHandler(ele)}>
        <Method>{ele.method ? ele.method : "GET"}</Method>
        <div
          style={{
            marginLeft: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {`${ele.endPoint}`}
        </div>
      </EndPoint>
    );
  });
  const history = props.getHistoryData
    ? props.getHistoryData.map((ele) => {
        return (
          <EndPoint key={uuidv4()} onClick={() => deleteHandler(ele)}>
            <Method>{ele.method ? ele.method : "GET"}</Method>
            <div
              style={{
                marginLeft: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {`${ele.endPoint}`}
            </div>
          </EndPoint>
        );
      })
    : alternativeData;
  return <Container>{history ? history : <p>No History Yet</p>}</Container>;
}

export default History;
