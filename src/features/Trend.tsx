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
                                <td>{match.date}</td>
                                <td>{match.quantity}</td>
                                <td>{reversedArray[index + 1] != null && match.quantity - reversedArray[index + 1].quantity}</td>
                                <td>{reversedArray[index + 1] != null && Math.round((((match.quantity - reversedArray[index + 1].quantity) / match.quantity)) * 100) + "%"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}