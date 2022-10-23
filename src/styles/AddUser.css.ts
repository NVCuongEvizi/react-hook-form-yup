import styled from "styled-components";

const AddUserContainer = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
    }
  }
`;

export default AddUserContainer;
