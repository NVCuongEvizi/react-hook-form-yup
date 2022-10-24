import styled from "styled-components";

const UserTableContainer = styled.section`
  text-align: center;
  button {
    margin-left: 10px;
    cursor: pointer;
  }
  table {
    margin: 20px auto 0;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #ddd;
    }
    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04aa6d;
      color: white;
    }
  }
`;

export default UserTableContainer;
