import { HasFormatter } from "../interfaces/HasFormatter";
// classes
export class Payment implements HasFormatter {
    // recipient:string;
    // details:string;
    // amount:number;
  
    constructor(
      // c:string,d:string,a:number
      readonly recipient: string,
      private details: string,
      public amount: number,
    ) {
      // this.client=c;
      // this.details=d;
      // this.amount=a;
    }
  
    format() {
      return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
  }
  
  // export default Payment;