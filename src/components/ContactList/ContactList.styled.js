import styled from '@emotion/styled';

export const Ul = styled.ul`
  padding: 15px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  padding-left: 120px;
`;
export const P = styled.p`
  text-align: center;
  display: block;
`;
export const Li = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  gap: 10px;
`;
export const Button = styled.button`
  margin-left: 15px;
  border-radius: 5px;
  border: none;
  background-color: lightgrey;
  :hover {
    background-color: dodgerblue;
    border: none;
  }
`;
