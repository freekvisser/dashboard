import { TicketInfo } from './TicketInfo'

export interface PortInfo extends TicketInfo{
    portNumber: number;
    range: string;
    hide: boolean;
}
