import { TdStyled, TrStyled } from './TransactionHistory.styled';

export const TransactionsContent = ({ transactions }) => {
  return transactions.map((prop, index) => (
    <TrStyled index={index}>
      <TdStyled>{prop.type}</TdStyled>
      <TdStyled>{prop.amount}</TdStyled>
      <TdStyled>{prop.currency}</TdStyled>
    </TrStyled>
  ));
};
