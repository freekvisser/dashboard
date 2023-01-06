export interface PortInfo{
    portNumber: number;
    scannedTickets: number;
    range: string;
    trend: number;
    high: {
        timestamp: Date;
        quantity: number;
    };
    low: {
        timestamp: Date;
        quantity: number;
    }

}
