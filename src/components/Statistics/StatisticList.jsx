import {
  Item,
  Label,
  Percentage,
} from './Statistics.styled.jsx';

export const StatisticList = ({ stats }) => {
    return (
        stats.map(stats => 
               <Item key={stats.id}>
                <Label>{stats.label}</Label>
                <Percentage>{stats.percentage}</Percentage>
                </Item>
        )
    )
}  