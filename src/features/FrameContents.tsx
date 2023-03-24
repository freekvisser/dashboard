import React, {useState} from 'react';
import { ticketInfo } from '../types/ticketInfo'

export interface FrameContents extends React.HTMLAttributes<HTMLDivElement>, ticketInfo {
    portNumber: number;
    open: boolean;
    types: ticketInfo[]
}


const FrameContents = (props: FrameContents) => {
    const {
        portNumber,
        scannedTickets,
        trend,
        high,
        low,
        open,
        types,
        className,
    } = props;

    const [index, setIndex] = useState(0)

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
                    <span id="scanned-tickets">{ticketTypes[index]}</span><br/>
                    <span>gescande tickets</span>
                </div>
                <h2>{types[index].scannedTickets}</h2>
            </div>
            {open && (
                <>
                    <div className="frame-sections">
                        <span className="trend" id={types[index].trend < 0 ? "neg-trend" : "pos-trend"}>{types[index].trend + "%"}</span><br/>
                        <span>T.o.v. laatste wedstrijd</span>
                    </div>
                    <div className="frame-sections">
                        <span className={"high-low"}>{types[index].high.timestamp.getHours() + ":" + types[index].high.timestamp.getMinutes().toString().padStart(2, '0') + " (" + types[index].high.quantity + ")"}</span><br/>
                        <span>Piek</span><br/>
                        <span className={"high-low"}>{types[index].low.timestamp.getHours() + ":" + types[index].low.timestamp.getMinutes().toString().padStart(2, '0') + " (" + types[index].low.quantity + ")"}</span><br/>
                        <span>Dal</span>
                    </div>

                    <div className="bottom-bar">
                        {types.map((type, i) => {
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