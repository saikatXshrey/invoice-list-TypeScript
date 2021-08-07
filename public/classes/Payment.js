// classes
export class Payment {
    // recipient:string;
    // details:string;
    // amount:number;
    constructor(
    // c:string,d:string,a:number
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        // this.client=c;
        // this.details=d;
        // this.amount=a;
    }
    format() {
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
}
// export default Payment;
