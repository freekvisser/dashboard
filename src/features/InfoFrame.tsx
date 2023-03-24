import FrameContents from "./FrameContents";
import { PortInfo } from "../types/PortInfo";
import ChevronDownIcon from "../features/icons/ChevronDownIcon";
import ChevronUpIcon from "../features/icons/ChevronUpIcon";
import React, {useState} from "react";
import {TicketInfo} from "../types/TicketInfo";

export interface InfoFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    portInfo: PortInfo;
}

const InfoFrame = (props: InfoFrameProps) => {
    const {portInfo, id, className = ''} = props;

    const ticketInfos : TicketInfo[] = [
        {
            scannedTickets: portInfo.scannedTickets,
            trend: portInfo.trend,
            high: portInfo.high,
            low: portInfo.low,
            history: portInfo.history
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
            },
            history: [
                        {
                            date: new Date(1679649878 * 1000),
                            value: 109
                        },
                        {
                            date: new Date(1679649578 * 1000),
                            value: 189
                        },
                        {
                            date: new Date(1679649378 * 1000),
                            value: 59
                        }

            ]
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
            },
            history: [
                {
                    date: new Date(1679649878 * 1000),
                    value: 109
                },
                {
                    date: new Date(1679649578 * 1000),
                    value: 189
                },
                {
                    date: new Date(1679649378 * 1000),
                    value: 59
                }

            ]
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
            },
            history: [
                {
                    date: new Date(1679649878 * 1000),
                    value: 109
                },
                {
                    date: new Date(1679649578 * 1000),
                    value: 190
                },
                {
                    date: new Date(1679649378 * 1000),
                    value: 59
                }

            ]
        },
    ]

    const [open, setOpen] = useState<boolean>(false);


    return(
        <div id={id} className={className + (portInfo.hide ? ' hidden' : '')}>
            <FrameContents portNumber={portInfo.portNumber} open={open} info={ticketInfos} className={"port-content"}/>
            {open ? (
                <ChevronUpIcon className="chevron" onClick={() => setOpen(!open)} />
            ) : (
                <ChevronDownIcon className="chevron" onClick={() => setOpen(!open)} />
            )}
        </div>
    )
}

export default InfoFrame;