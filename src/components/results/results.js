import styled from "styled-components";
import { useEffect, useState } from "react";
import JSONPretty from "react-json-pretty";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
`;

let headers = {
  root: {
    "content-length": "55",
    "content-type": "application/json charset=utf-8",
  },
};

function Results(props) {
  let endPoint = props.getResultsData.endPoint;
  let [response, setResponse] = useState();
  let [responseHeaders, setResponseHeaders] = useState();
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    async function fetchData() {
      const res = await fetch(endPoint, {
        method: props.getResultsData.method,
        body: props.getResultsData.body
          ? JSON.stringify(props.getResultsData.body)
          : null,
      });
      const data = await res.json();
      const head = await res.headers;
      setResponse(data);
      setResponseHeaders(head);
    }
    fetchData();
    setTimeout(() => setIsLoading(true), 500);
  }, [endPoint, props.getResultsData.method, props.getResultsData.body]);

  let output =
    isLoading === false ? (
      <p>Loading</p>
    ) : (
      <Container>
        <h2 style={{ width: "80%", margin: "2vh, 0" }}>Results</h2>
        <JSONPretty
          id="json-pretty"
          data={response}
          style={{ width: "100%", height: "35vh", overflow: "auto" }}
        ></JSONPretty>
      </Container>
    );

  return (
    <Container>
      <Container>
        <h2 style={{ width: "80%", margin: "2vh, 0" }}>Headers</h2>
        <JSONPretty
          id="json-pretty"
          data={responseHeaders}
          style={{ width: "100%", height: "20vh", overflow: "auto" }}
        ></JSONPretty>
      </Container>
      {output}
    </Container>
  );
}

export default Results;
