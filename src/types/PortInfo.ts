import { ticketInfo } from './ticketInfo'

export interface PortInfo extends ticketInfo{
    portNumber: number;
    range: string;
    hide: boolean;
}
