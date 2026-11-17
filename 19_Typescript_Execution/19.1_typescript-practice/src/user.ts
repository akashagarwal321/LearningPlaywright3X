export interface User {
    id: number;
    name: string;
}

export function getUser(): User {
    return {
        id: 101,
        name: "Akash"
    };
}