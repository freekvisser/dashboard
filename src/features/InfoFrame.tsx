import React from 'react';

export interface InfoFrameProps {
    portNumber: number;
    scannedTickets: number;
}

const InfoFrame = (props: InfoFrameProps) => {
    const {
        portNumber,
        scannedTickets,
    } = props;


    return(
        <div>
            <span>Poort {portNumber}</span>
            <div>
                <span>{scannedTickets} <br/> gescande tickets</span>
            </div>
        </div>
    )
}

export default InfoFrame;