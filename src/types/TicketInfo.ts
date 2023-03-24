export interface TicketInfo {
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
    history:
                {
                    date: Date;
                    value: number;
                }[]
}