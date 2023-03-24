import { TicketInfo } from './TicketInfo'

export interface FrameInfo extends React.HTMLAttributes<HTMLDivElement> {
    portNumber: number;
    open: boolean;
    info: TicketInfo[]
}