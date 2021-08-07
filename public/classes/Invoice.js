// classes
export class Invoice {
    // client:string;
    // details:string;
    // amount:number;
    constructor(
    // c:string,d:string,a:number
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client=c;
        // this.details=d;
        // this.amount=a;
    }
    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
// export default Invoice;
