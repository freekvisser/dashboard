import React from 'react';

export interface PortFilter extends React.HTMLAttributes<HTMLDivElement> {
    scannedTickets: number;
}