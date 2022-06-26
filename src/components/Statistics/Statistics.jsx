import PropTypes from 'prop-types';
import {
  Box,
  Centralize,
  StatistList
} from './Statistics.styled.jsx';

import { StatList } from "./StatList"
import { Tittle } from "./Title"

export const Statistics = ({title, stats}) => {
    return (
        <Centralize>
             <Box
        bg="bg"
        mt={4}
        display="flex"
        flexDirection="column"
        boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
            >
             {title && (<Tittle title={title}/>)}
            <StatistList>
                <StatList
                stats={stats}/>
            </StatistList>
         
      </Box>

          
   
    </Centralize>
   )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};