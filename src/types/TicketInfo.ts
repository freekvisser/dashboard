export interface TicketInfo {
    scannedTickets: number;
    trend: number;
    high: {
        timestamp: string;
        quantity: number;
    },
    low: {
        timestamp: string;
        quantity: number;
    }
    history:
                {
                    date: string;
                    quantity: number;
                }[]
}