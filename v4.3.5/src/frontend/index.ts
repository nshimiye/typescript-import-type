import { Model } from '../shared/decorators';

import type { Payment } from '../shared/Payment';

export default class Frontend {
    @Model() public payment: Payment;
    constructor(payment: Payment) {
        this.payment = payment;
    }
}