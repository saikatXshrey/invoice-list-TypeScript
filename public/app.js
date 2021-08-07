// importing Invoice class
// import Invoice from './classes/Invoice.js';
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne=new Invoice('yoshi','web work',250);
// docTwo=new Payment('mario','plumbing work',200);
// let docs:HasFormatter[] =[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('mario', 'work on mario website', 250);
// const invTwo = new Invoice('luigi', 'work on luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// })
// // interface
// interface IsPerson{
//   name: string;
//   age:number; 
//   speak(a:string):void;
//   spend(a:number):number;
// }
// const Us:IsPerson ={
//   name: "Billi🐱 & Monke🐒❤",
//   age:30,
//   speak(text:string):void{
//     console.log(text);
//   },
//   spend(a:number):number{
//     console.log('We spent',a);
//     return a;
//   }
// };
// console.log(Us); 
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // tuple
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'bantu' }
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'dudu', 'dick']
};
console.log(docThree, docFour);
// tuples
let tup = ['ryu', 25, true];
console.log(tup);
tup[0] = 'ken';
tup[1] = 30;
console.log(tup);
