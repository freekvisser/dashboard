import FrameContents from "./FrameContents";
import { PortInfo } from "../types/PortInfo";
import ChevronDownIcon from "../features/icons/ChevronDownIcon";
import ChevronUpIcon from "../features/icons/ChevronUpIcon";
import React, {useState} from "react";

export interface InfoFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    portInfo: PortInfo;
}

const InfoFrame = (props: InfoFrameProps) => {
    const {portInfo, id, className = ''} = props;

    const [open, setOpen] = useState<boolean>(false);


    return(
        <div id={id} className={className + (portInfo.hide ? ' hidden' : '')} onClick={() => setOpen(!open)}>
            <span id="port-number">Poort {portInfo.portNumber}</span>
            <FrameContents scannedTickets={portInfo.scannedTickets} trend={portInfo.trend} high={portInfo.high} low={portInfo.low} className={"port-content"} open={open}/>
            {open ? (
                <ChevronUpIcon className="chevron" onClick={() => setOpen(!open)} />
            ) : (
                <ChevronDownIcon className="chevron" onClick={() => setOpen(!open)} />
            )}
        </div>
    )
}

export default InfoFrame;