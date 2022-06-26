// import PropTypes from 'prop-types';

import { Statlist } from "./Statlist"
import { Tittle } from "./Title"

export const Statistics = ({title, stats}) => {
    return (
        <section class="statistics">
            {title && (<Tittle title={title}/>)}


            <ul class="stat-list">
                <Statlist
                stats={stats}/>
            </ul>
    </section>

    )


}

