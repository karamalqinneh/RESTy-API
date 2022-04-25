import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Container = styled.ul`
height 40vh;
width: 40vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
overflow-y: scroll;
`;

const EndPoint = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  height: 3rem;
  margin-bottom: 0.5rem;
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

function History(props) {
  const history = props.getHistoryData.map((ele) => {
    return (
      <EndPoint key={uuidv4()}>
        <Method>{ele.method}</Method>
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
  return (
    // <Container>{!props.renderedData ? history : <p>No History</p>}</Container>
    <Container>
      {props.getHistoryData ? history : <p>No History Yet</p>}
    </Container>
  );
}

export default History;
