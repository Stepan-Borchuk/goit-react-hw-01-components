import { TransactionsContent } from "./TransactionsContent"
import {
  Table,
  TheadStyled
} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
    <Table>
        <TheadStyled>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </TheadStyled>

            <tbody>
                <TransactionsContent
                transactions={items}/>

             
        </tbody>
    </Table> 
    )
}