const id= document.getElementById('id');
const date= document.getElementById('date');
const sum= document.getElementById('sum');
const discribe= document.getElementById('discribe');
const status= document.getElementById('status');
const wayOfPayment= document.getElementById('wayOfPayment');
const datails= document.getElementById('datails');
const toPay= document.getElementById('toPay');
const toBack = document.getElementById('toBack');

toPay.onclick=()=>{
    if(wayOfPayment.value==='card')
          p=new CardPayment(id.value,date.value,sum.value,discribe.value,
            status.value,wayOfPayment.value,datails.value,numCard.value);
    if(wayOfPayment.value==='clearing')
        p=new Clearing(id.value,date.value,sum.value,discribe.value,
            status.value,wayOfPayment.value,datails.value,idPayment.value);
    else
        p=new Payment(id.value,date.value,sum.value,discribe.value,
            status.value,wayOfPayment.value,datails.value);
            p.toPay();
}
class Payment{
    constructor(id,date, sum, discribe, status, wayOfPayment,datails)
    {
        this.id = id;
        this.date= date;
        this.sum= sum;
        this.discribe=discribe;
        this.status = status;
        this.wayOfPayment = wayOfPayment;
        this.datails = datails;
    }
    toPay=()=>{
        paymentArr.push(this);
    }

    toRemove =(idPayment)=>{
        paymentArr.findIndex( p => p.id===idPayment);
        paymentArr.splice(idPayment,1);
    }
}

class CardPayment extends Payment{

    constructor(id,date, sum, discribe, status, wayOfPayment,datails,numCard)
    {
        super(id,date, sum, discribe, status, wayOfPayment,datails);
        this.numCard = numCard;
    }
}

class Clearing extends Payment
{
    constructor(id,date, sum, discribe, status, wayOfPayment,datails, id,)
    {
        super(id,date, sum, discribe, status, wayOfPayment,datails);
        this.id = id;
    }

}
