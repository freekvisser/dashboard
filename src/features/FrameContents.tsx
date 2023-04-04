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
    const [ticketsPerType, setTicketPerType] = useState(scannedTickets)
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

    function getScannedTickets() {
        fetch('/getScannedTickets.php?portId=' + portNumber + '&index=' + index)
            .then((response) => response.json())
            .then((data) => {
                setTicketPerType(data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        getScannedTickets();
        if (open) {
            getHighLow();
            getHistory();
        }
        else{
            const intervalId = setInterval(
                () => {
                    getScannedTickets();
                }
                , 1000)
            return (() => {
                clearInterval(intervalId)
            })
        }
        if (open){
            const intervalId = setInterval(
                () => {
                    getScannedTickets();
                    getHighLow();
                    getHistory();
                }
                , 1000)
            return (() => {
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

    const ticketTypes = ['Totaal', "E-ticket", "Hardcard", "Mobiel"]

    return(
        <div className={className}>
            <div className="mask">
                <div className="title">
                    <h1>Poort {portNumber}</h1>
                </div>
            </div>
            <div className="frame-sections" id="sub-title">
                <div>
                    <span id="scanned-tickets">{ticketTypes[index]}</span><br/>
                    <span>gescande tickets</span>
                </div>
                <h2>{ticketsPerType}</h2>
            </div>
            {open && (
                <>
                    <div className="frame-sections">
                        <span className={"high-low"}>{highLow.high.timestamp.slice(0, -3) + " (" + highLow.high.quantity + ")"}</span><br/>
                        <span>Piek</span><br/>
                        <span className={"high-low"}>{highLow.low.timestamp.slice(0, -3) + " (" + highLow.low.quantity + ")"}</span><br/>
                        <span>Dal</span>
                    </div>
                    <div className="frame-sections">
                        {history.length > 0 ?
                            <>
                                <span className="trend" id={info.trend < 0 ? "neg-trend" : "pos-trend"}>{info.trend + "%"}</span><br/>
                                <span>T.o.v. laatste wedstrijd</span>
                            </>
                            :
                            <span>Niet genoeg data voor extra statistieken</span>
                        }
                    </div>
                    <Graph history={info.history}/>

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