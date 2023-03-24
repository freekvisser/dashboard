import FrameContents from "./FrameContents";
import { PortInfo } from "../types/PortInfo";
import ChevronDownIcon from "../features/icons/ChevronDownIcon";
import ChevronUpIcon from "../features/icons/ChevronUpIcon";
import React, {useState} from "react";
import {ticketInfo} from "../types/ticketInfo";

export interface InfoFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    portInfo: PortInfo;
}

const InfoFrame = (props: InfoFrameProps) => {
    const {portInfo, id, className = ''} = props;

    const ticketInfos : ticketInfo[] = [
        {
            scannedTickets: portInfo.scannedTickets,
            trend: portInfo.trend,
            high: portInfo.high,
            low: portInfo.low,
        },
        {
            scannedTickets: 402,
            trend: 3,
            high: {
                timestamp: new Date(1679649878 * 1000),
                quantity: 234,
            },
            low: {
                timestamp: new Date(1679649878 * 1000),
                quantity: 12,
            }
        },
        {
            scannedTickets: 412,
            trend: 3,
            high: {
                timestamp: new Date(1679649878 * 1000),
                quantity: 234,
            },
            low: {
                timestamp: new Date(1679649878 * 1000),
                quantity: 12,
            }
        },
        {
            scannedTickets: 349,
            trend: 3,
            high: {
                timestamp: new Date(1679649878 * 1000),
                quantity: 234,
            },
            low: {
                timestamp: new Date(1679649878 * 1000),
                quantity: 12,
            }
        },
    ]

    const [open, setOpen] = useState<boolean>(false);


    return(
        <div id={id} className={className + (portInfo.hide ? ' hidden' : '')}>
            <FrameContents portNumber={portInfo.portNumber} scannedTickets={portInfo.scannedTickets} trend={portInfo.trend} high={portInfo.high} low={portInfo.low} open={open} types={ticketInfos} className={"port-content"}/>
            {open ? (
                <ChevronUpIcon className="chevron" onClick={() => setOpen(!open)} />
            ) : (
                <ChevronDownIcon className="chevron" onClick={() => setOpen(!open)} />
            )}
        </div>
    )
}

export default InfoFrame;