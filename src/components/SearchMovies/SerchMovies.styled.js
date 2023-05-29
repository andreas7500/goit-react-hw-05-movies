import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  display: inline-block;
  border: none;
  font-size: 16px;
  font-weight: bold;

  border-radius: 5px;
  cursor: pointer;

  box-shadow: 2px 1px 9px 0px #584040;

  :hover {
    color: black;
  }
  :focus {
    color: red;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  padding-left: 5px;
  border: none;
  box-shadow: 2px 1px 9px 0px #584040;
  cursor: pointer;
  outline: 1px solid black;
`;
