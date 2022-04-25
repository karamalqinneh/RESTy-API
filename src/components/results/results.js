import axios from "axios";
import styled from "styled-components";

function Results(props) {
  let endPoint = props.getResultsData.endPoint;
  let response;
  const responseHandler = async () => {
    let request = await axios.get(endPoint);
    return request;
  };
  console.log(responseHandler().data);
  return <div>test</div>;
}

export default Results;
