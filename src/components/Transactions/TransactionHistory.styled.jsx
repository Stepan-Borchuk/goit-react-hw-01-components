import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const TdStyled = styled.td`
  text-align: center;
  height: 40px;
  width: 250px;
`;

export const TrStyled = styled.tr`
  height: 30px;
  width: 250px;
  background-color: ${p => (p.index % 2 ? '#71cbc7' : 'white')};
`;

export const TheadStyled = styled.thead`
  height: 40px;
  width: 250px;
  background-color: #00bcd8;
  color: white;
`;
