interface TrendProps {
    history: {
        date: Date;
        value: number;
    }[]

}

export const Trend = (props: TrendProps)  => {
    const { history } = props;

    return(
        <div>
            <table>
                <tr>
                    <th>Datum</th>
                    <th>Gescand</th>
                    <th>Verschil</th>
                    <th>%</th>
                </tr>
                {history.map((match, index) => {
                    return (
                        <>
                            <tr>
                                <td>{match.date.getDay() + "-" + (match.date.getMonth() + index)}</td>
                                <td>{match.value}</td>
                                <td>{history[index + 1] != null && match.value - history[index + 1].value}</td>
                                <td>{history[index + 1] != null && Math.round((((match.value - history[index + 1].value) / match.value)) * 100) + "%"}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </div>
    )
}