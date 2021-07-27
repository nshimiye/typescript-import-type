import { Model } from '../shared/decorators';
import { Payment } from './../shared/Payment';

type LocalPayment = Payment;

export default class Frontend {
    @Model() public payment: LocalPayment;
    constructor(payment: Payment) {
        this.payment = payment;
    }
}