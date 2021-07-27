import { promises } from 'fs';

export class Payment {
    description: string = '';
    amount: number = 0;

    constructor(public id: string) {}

    getReceipt(): Promise<Buffer> {
        return promises.readFile(`file-store/${this.id}`);
    }
}
