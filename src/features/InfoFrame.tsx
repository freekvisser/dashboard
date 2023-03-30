import FrameContents from "./FrameContents";
import { PortInfo } from "../types/PortInfo";
import ChevronDownIcon from "../features/icons/ChevronDownIcon";
import ChevronUpIcon from "../features/icons/ChevronUpIcon";
import React, {useEffect, useState} from "react";
import {TicketInfo} from "../types/TicketInfo";

export interface InfoFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    portInfo: PortInfo;
}

const InfoFrame = (props: InfoFrameProps) => {
    const {portInfo, id, className = ''} = props;
    const [open, setOpen] = useState<boolean>(false);

    return(
        <div id={id} className={className + (portInfo.hide ? ' hidden' : '')}>
            {
                <FrameContents portNumber={portInfo.portNumber} scannedTickets={portInfo.scannedTickets} open={open} className={"port-content"}/>
            }
            {open ? (
                <ChevronUpIcon className="chevron" onClick={() => setOpen(!open)} />
            ) : (
                <ChevronDownIcon className="chevron" onClick={() => setOpen(!open)} />
            )}
        </div>
    )
}

export default InfoFrame;