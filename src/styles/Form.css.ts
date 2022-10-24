import styled from "styled-components";

const FormContainer = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 20px 0;
  }
  form {
    width: 500px;
    margin: 20px auto 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ccc;
    label {
      font-weight: bold;
    }
    input,
    select {
      padding: 8px;
      margin: 4px 0 10px;
    }
    .error-container {
      color: red;
      margin-bottom: 20px;
    }
    button {
      width: 60px;
      margin: 0 auto;
      padding: 4px;
      cursor: pointer;
    }
  }
`;

export default FormContainer;
