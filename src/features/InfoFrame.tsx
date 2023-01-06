import FrameContents from "./FrameContents";
import { PortInfo } from "../types/PortInfo";
import React from "react";

export interface InfoFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    portInfo: PortInfo;
}

const InfoFrame = (props: InfoFrameProps) => {
    const {portInfo, className = ''} = props;

    return(
        <div className={className}>
            <span>Poort {portInfo.portNumber}</span>
            <FrameContents scannedTickets={portInfo.scannedTickets} className={"port-content"} />
        </div>
    )
}

export default InfoFrame;