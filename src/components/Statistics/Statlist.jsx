export const StatList = ({ stats }) => {
    return (
        stats.map(stats => 
               <li class="item">
                <span class="label">{stats.label}</span>
                <span class="percentage">{stats.percentage}</span>
                </li>
        )
    )
}  