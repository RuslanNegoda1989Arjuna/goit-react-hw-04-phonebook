import styled from '@emotion/styled';

export const ListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  color: rgb(1, 1, 1);
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const ContactIt = styled.p`
  margin-right: 20px;
  font-weight: 700;
`;

export const BtnDelete = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(255, 183, 48, 1);
  }
`;
