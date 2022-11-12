import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const Input = styled(Field)`
  font-size: 22px;
  margin-top: 5px;
`;

export const FormUs = styled(Form)`
  margin: 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 2px solid;
  background-color: aliceblue;
`;

export const LabelIn = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px;

  border-radius: 3px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(255, 183, 48, 1);
    scale: 1.02;
  }
`;
