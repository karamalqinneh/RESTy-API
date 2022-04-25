import axios from "axios";
import styled from "styled-components";
import { useEffect, useCallback, useState } from "react";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
`;

function Results(props) {
  let endPoint = "https://isupport-server.herokuapp.com/trending";
  let [response, setResponse] = useState();
  const fetchDataHandler = useCallback(async () => {
    const res = await fetch(endPoint);
    const data = await res.json();
    setResponse(data);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);
  console.log(response);
  return (
    <Container>
      <h2 style={{ width: "80%" }}>Headers</h2>
      <div>
        root: "content-length": "55", "content-type": "application/json;
        charset=utf-8"
      </div>
      <h2 style={{ width: "80%" }}>Results</h2>
      <div>
        root: [ "Quit smoking", "Health Lifestyle", "Healthy Lifestyle" ]
      </div>
    </Container>
  );
}

export default Results;
