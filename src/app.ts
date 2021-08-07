// importing Invoice class
// import Invoice from './classes/Invoice.js';
import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // tuple
  let values:[string,string,number]=[tofrom.value,details.value,amount.valueAsNumber];

  let doc:HasFormatter;

  if(type.value === 'invoice'){
    doc = new Invoice(...values);
  }else{
    doc = new Payment(...values);
  }

  list.render(doc,type.value,'end');
});

// GENERICS

const addUID = <T extends {name:string}>(obj:T)=>{
  let uid=Math.floor(Math.random()*100);
  return {...obj,uid};
}

let docOne=addUID({name: 'yoshi',age:40});

console.log(docOne.age);

// with interface
interface Resource<T> {
  uid:number;
  resourceName:string;
  data:T;
}

const docThree:Resource<object> = {
  uid:1,
  resourceName:'person',
  data:{name:'bantu'}
}

const docFour:Resource<string[]> = {
  uid:2,
  resourceName:'shoppingList',
  data:['bread','dudu','dick']
}

console.log(docThree,docFour);

// tuples
let tup:[string,number,boolean]=['ryu',25,true];
console.log(tup);

tup[0]='ken';
tup[1]=30;

console.log(tup);