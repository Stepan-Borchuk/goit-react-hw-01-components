import PropTypes from 'prop-types';

import { StatList } from "./StatList"
import { Tittle } from "./Title"

export const Statistics = ({title, stats}) => {
    return (
        <section class="statistics">
            {title && (<Tittle title={title}/>)}
            <ul class="stat-list">
                <StatList
                stats={stats}/>
            </ul>
    </section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};