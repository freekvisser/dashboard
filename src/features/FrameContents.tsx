import React from 'react';

export interface FrameContents extends React.HTMLAttributes<HTMLDivElement> {
    scannedTickets: number;
    trend: number;
    high: {
        timestamp: Date;
        quantity: number;
    },
    low: {
        timestamp: Date;
        quantity: number;
    }
    open: boolean;
}

const FrameContents = (props: FrameContents) => {
    const {
        scannedTickets,
        trend,
        high,
        low,
        open,
        className,
    } = props;


    return(
        <div className={className}>
            <div className="frame-sections">
                <span id="scanned-tickets">{scannedTickets}</span><br/>
                <span>gescande tickets</span>
            </div>
            {open && (
                <>
                    <div className="frame-sections">
                        <span className="trend" id={trend < 0 ? "neg-trend" : "pos-trend"}>{trend + "%"}</span><br/>
                        <span>T.o.v. laatste wedstrijd</span>
                    </div>
                    <div className="frame-sections">
                        <span className={"high-low"}>{high.timestamp.getHours() + ":" + high.timestamp.getMinutes() + " (" + high.quantity + ")"}</span><br/>
                        <span>Piek</span><br/>
                        <span className={"high-low"}>{low.timestamp.getHours() + ":" + low.timestamp.getMinutes() + " (" + low.quantity + ")"}</span><br/>
                        <span>Dal</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default FrameContents;