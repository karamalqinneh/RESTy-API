import styled from "styled-components";
import { useRef } from "react";
const FormData = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 25vh;
`;

const StylingDiv = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const LinkInput = styled.input`
  background: #f5f5f5;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 1.1rem;
  margin: 0;
  outline: none;
  padding: 0.25rem;
  transition: all 0.4s ease-out;
  width: 80%;
`;

const Button = styled.button`
  text-align: center;
  padding: 1px 0.7rem;
  border-width: 1px;
  border-radius: 4px;
  margin-left: 5vw;
  background-color: #efefef;
`;

const Keys = styled.span`
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 0.5rem;
  padding: 0.4rem 1rem;
  line-height: 2rem;
  height: 1.75rem;
  &.active {
    background: #b5b3b3;
  }
  &:hover {
    background: #b5b3b3;
  }
`;

const TextArea = styled.textarea`
  width: 60%;
  height: 3rem;
  background: #ffffff;
`;
function Form(props) {
  const endPointInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.getFormData({
      endPoint: endPointInputRef.current.value,
      method: "GET",
    });
    // props.editHistoryData();
  };
  // props.getFormData("TEST");
  return (
    <FormData onSubmit={submitHandler}>
      <StylingDiv>
        <LinkInput ref={endPointInputRef}></LinkInput>
        <Button type="submit">Go</Button>
      </StylingDiv>
      <StylingDiv>
        <div>
          <Keys>Get</Keys>
          <Keys>Post</Keys>
          <Keys>Put</Keys>
          <Keys>Delete</Keys>
        </div>
        <TextArea></TextArea>
      </StylingDiv>
    </FormData>
  );
}

export default Form;
