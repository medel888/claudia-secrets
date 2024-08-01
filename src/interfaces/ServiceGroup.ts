interface Service {
    name: string;
    price: number;
}

export interface ServiceGroup {
    name: string;
    services: Service[];
}