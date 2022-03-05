export interface QRCodeResponses {
    type: string;
    data: string;
}

export interface TicketProps {
    _id: string;
    event: string;
    cpf: string;
    active: boolean;
    createdAt: string;
}
