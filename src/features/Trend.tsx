interface TrendProps {
    history: {
        date: string;
        quantity: number;
    }[]

}

export const Trend = (props: TrendProps)  => {
    const { history } = props;

    const reversedArray = history.slice(0).reverse();

    return(
        <div>
            {reversedArray.length > 0 && (
                <table>
                    <tbody>
                        <tr>
                            <th>Datum</th>
                            <th>Gescand</th>
                            <th>Verschil</th>
                            <th>%</th>
                        </tr>
                        {reversedArray.map((match, index) => {
                            return (
                                <tr key={'tr' + index}>
                                    <td>{match.date.slice(5)}</td>
                                    <td>{match.quantity}</td>
                                    <td>{reversedArray[index + 1] != null && match.quantity - reversedArray[index + 1].quantity}</td>
                                    <td>{reversedArray[index + 1] != null && Math.round((((match.quantity - reversedArray[index + 1].quantity) / match.quantity)) * 100) + "%"}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}