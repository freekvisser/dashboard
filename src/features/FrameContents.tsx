import React, {useEffect, useState} from 'react';
import { FrameInfo } from '../types/FrameInfo'
import { Trend } from './Trend'
import { Graph } from './Graph'
import {TicketInfo} from "../types/TicketInfo";


const FrameContents = (props: FrameInfo) => {
    const {
        portNumber,
        scannedTickets,
        open,
        className,
    } = props;

    const [index, setIndex] = useState(0)

    const [highLow, setHighLow] = useState({
        high: { timestamp: "", quantity: 0 },
        low: { timestamp: "", quantity: 0 }
    })
    const [history, setHistory] = useState([])

    function getHistory(){
        fetch('/getHistory.php?index=' + index + '&portId=' + portNumber)
            .then((response) => response.json())
            .then((data) => {
                setHistory(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    function getHighLow(){
        fetch('/getHighAndLow.php?index=' + index + '&portId=' + portNumber)
            .then((response) => response.json())
            .then((data) => {
                setHighLow(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        if(open) {
            getHighLow();
            getHistory();
            const intervalId = setInterval(
                () => {
                    getHighLow();
                    getHistory();
                }
                , 10000)
            return(() => {
                clearInterval(intervalId)
            })
        }
    }, [open, index])

    const trend = () => {
        const reversedArray = history.slice(0).reverse();
        const trend = reversedArray[0] ? Math.round((((reversedArray[0].quantity - reversedArray[1].quantity) / reversedArray[0].quantity)) * 100) : 0
        return trend;
    }
    const info: TicketInfo =
        {
            scannedTickets: scannedTickets,
            trend: trend(),
            high: highLow.high,
            low: highLow.low,
            history: history
        }

    const ticketTypes = ['Totaal', "Mobile", "E-ticket", "Hardcard"]

    return(
        <div className={className}>
            <div className="mask">
                <div className="title">
                    <h1>Poort {portNumber}</h1>
                </div>
            </div>
            <div className="frame-sections" id="sub-title">
                <div>
                    <span id="scanned-tickets">{scannedTickets}</span><br/>
                    <span>gescande tickets</span>
                </div>
                <h2>{info.scannedTickets}</h2>
            </div>
            {open && (
                <>
                    <Graph history={info.history}/>
                    <div className="frame-sections">
                        <span className="trend" id={info.trend < 0 ? "neg-trend" : "pos-trend"}>{info.trend + "%"}</span><br/>
                        <span>T.o.v. laatste wedstrijd</span>
                    </div>
                    <div className="frame-sections">
                        <span className={"high-low"}>{highLow.high.timestamp + " (" + highLow.high.quantity + ")"}</span><br/>
                        <span>Piek</span><br/>
                        <span className={"high-low"}>{highLow.low.timestamp + " (" + highLow.low.quantity + ")"}</span><br/>
                        <span>Dal</span>
                    </div>

                    <div className="frame-sections">
                        <Trend history={info.history} />
                    </div>

                    <div className="bottom-bar">
                        <span>{ticketTypes[index]}</span>
                        {ticketTypes.map((type, i) => {
                            return (
                                <div
                                    className="type-button"
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    style={
                                        index === i
                                            ? { backgroundColor: "#000" }
                                            : {}
                                    }
                                />
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

export default FrameContents;