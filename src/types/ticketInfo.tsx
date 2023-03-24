export interface ticketInfo {
    scannedTickets: number;
    trend: number;
    high: {
        timestamp: Date;
        quantity: number;
    },
    low: {
        timestamp: Date;
        quantity: number;
    }
}