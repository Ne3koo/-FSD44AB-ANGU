export class Pastrie {
    id: string = "";
    ref: string = "";
    name: string = "";
    description: string = "";
    quantity: number = NaN;
    order: number = NaN;
    url?: string;
    tags?: Array<string>;
    like?: string;
}

export class List {
    id: string = "";
    list: Array<string> = [];
}