import React from 'react';

export interface FrameContents extends React.HTMLAttributes<HTMLDivElement> {
    scannedTickets: number;
}

const FrameContents = (props: FrameContents) => {
    const {
        scannedTickets,
        className,
    } = props;


    return(
        <div className={className}>
            <span>{scannedTickets} <br/> gescande tickets</span>
        </div>
    )
}

export default FrameContents;