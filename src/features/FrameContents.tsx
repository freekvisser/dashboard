import React, {useState} from 'react';
import { FrameInfo } from '../types/FrameInfo'
import { Trend } from './Trend'


const FrameContents = (props: FrameInfo) => {
    const {
        portNumber,
        open,
        info,
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
                <h2>{info[index].scannedTickets}</h2>
            </div>
            {open && (
                <>
                    <div className="frame-sections">
                        <span className="trend" id={info[index].trend < 0 ? "neg-trend" : "pos-trend"}>{info[index].trend + "%"}</span><br/>
                        <span>T.o.v. laatste wedstrijd</span>
                    </div>
                    <div className="frame-sections">
                        <span className={"high-low"}>{info[index].high.timestamp.getHours() + ":" + info[index].high.timestamp.getMinutes().toString().padStart(2, '0') + " (" + info[index].high.quantity + ")"}</span><br/>
                        <span>Piek</span><br/>
                        <span className={"high-low"}>{info[index].low.timestamp.getHours() + ":" + info[index].low.timestamp.getMinutes().toString().padStart(2, '0') + " (" + info[index].low.quantity + ")"}</span><br/>
                        <span>Dal</span>
                    </div>

                    <div className="frame-sections">
                        <Trend history={info[index].history} />
                    </div>

                    <div className="bottom-bar">
                        {info.map((type, i) => {
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